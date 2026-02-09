/**
 * Luna Piena - Blocked Dates Management
 * 
 * This file contains all blocked date ranges for the next 3 years.
 * Edit this file to add/remove blocked periods.
 * 
 * Format: { start: "YYYY-MM-DD", end: "YYYY-MM-DD" }
 * 
 * The start and end dates are INCLUSIVE (both days are blocked).
 */

const BlockedDates = {
    // Array of blocked date ranges
    ranges: [
        // 2026
        { start: "2026-02-20", end: "2026-02-25" },
        { start: "2026-03-04", end: "2026-03-09" },
        { start: "2026-03-25", end: "2026-03-28" },
        { start: "2026-04-05", end: "2026-04-26" },
        { start: "2026-06-10", end: "2026-06-22" },
        { start: "2026-08-19", end: "2026-08-31" },
        
        // 2027
        // Add your 2027 blocked dates here
        // { start: "2027-01-01", end: "2027-01-05" },
        
        // 2028
        // Add your 2028 blocked dates here
        // { start: "2028-01-01", end: "2028-01-05" },
    ],

    /**
     * Check if a specific date is blocked
     * @param {Date|string} date - Date to check
     * @returns {boolean} - True if date is blocked
     */
    isBlocked: function(date) {
        const checkDate = new Date(date);
        checkDate.setHours(0, 0, 0, 0);
        
        for (const range of this.ranges) {
            const start = new Date(range.start);
            const end = new Date(range.end);
            start.setHours(0, 0, 0, 0);
            end.setHours(23, 59, 59, 999);
            
            if (checkDate >= start && checkDate <= end) {
                return true;
            }
        }
        return false;
    },

    /**
     * Check if a date range overlaps with any blocked period
     * @param {Date|string} startDate - Start of range to check
     * @param {Date|string} endDate - End of range to check
     * @returns {boolean} - True if any overlap exists
     */
    hasOverlap: function(startDate, endDate) {
        const checkStart = new Date(startDate);
        const checkEnd = new Date(endDate);
        checkStart.setHours(0, 0, 0, 0);
        checkEnd.setHours(23, 59, 59, 999);
        
        for (const range of this.ranges) {
            const blockStart = new Date(range.start);
            const blockEnd = new Date(range.end);
            blockStart.setHours(0, 0, 0, 0);
            blockEnd.setHours(23, 59, 59, 999);
            
            // Check for any overlap
            if (checkStart <= blockEnd && checkEnd >= blockStart) {
                return true;
            }
        }
        return false;
    },

    /**
     * Get all blocked dates for a specific month
     * @param {number} year - Year (e.g., 2026)
     * @param {number} month - Month (0-11, where 0 = January)
     * @returns {number[]} - Array of blocked day numbers
     */
    getBlockedDaysInMonth: function(year, month) {
        const blockedDays = [];
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            if (this.isBlocked(date)) {
                blockedDays.push(day);
            }
        }
        return blockedDays;
    },

    /**
     * Get month status (available, partial, fully-booked)
     * @param {number} year - Year (e.g., 2026)
     * @param {number} month - Month (0-11)
     * @returns {string} - 'available', 'partial', or 'booked'
     */
    getMonthStatus: function(year, month) {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const blockedDays = this.getBlockedDaysInMonth(year, month);
        
        if (blockedDays.length === 0) {
            return 'available';
        } else if (blockedDays.length === daysInMonth) {
            return 'booked';
        } else {
            return 'partial';
        }
    },

    /**
     * Get blocked ranges that fall within a specific month
     * @param {number} year - Year
     * @param {number} month - Month (0-11)
     * @returns {string} - Formatted string of blocked ranges (e.g., "Apr 1-16")
     */
    getBlockedRangesText: function(year, month) {
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                           'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const ranges = [];
        
        for (const range of this.ranges) {
            const start = new Date(range.start);
            const end = new Date(range.end);
            
            // Check if this range overlaps with the given month
            const monthStart = new Date(year, month, 1);
            const monthEnd = new Date(year, month + 1, 0);
            
            if (start <= monthEnd && end >= monthStart) {
                // Determine the visible portion within this month
                const visibleStart = start < monthStart ? 1 : start.getDate();
                const visibleEnd = end > monthEnd ? monthEnd.getDate() : end.getDate();
                
                ranges.push(`${monthNames[month]} ${visibleStart}–${visibleEnd}`);
            }
        }
        
        return ranges.join(', ');
    },

    /**
     * Validate booking form dates
     * @param {string} checkinDate - Check-in date (YYYY-MM-DD)
     * @param {string} checkoutDate - Check-out date (YYYY-MM-DD)
     * @returns {object} - { valid: boolean, message: string }
     */
    validateBooking: function(checkinDate, checkoutDate) {
        if (!checkinDate || !checkoutDate) {
            return { valid: false, message: 'Please select both check-in and check-out dates.' };
        }
        
        const checkin = new Date(checkinDate);
        const checkout = new Date(checkoutDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (checkin < today) {
            return { valid: false, message: 'Check-in date cannot be in the past.' };
        }
        
        if (checkout <= checkin) {
            return { valid: false, message: 'Check-out date must be after check-in date.' };
        }
        
        if (this.hasOverlap(checkinDate, checkoutDate)) {
            return { 
                valid: false, 
                message: 'Sorry, some dates in your selected range are not available. Please choose different dates.' 
            };
        }
        
        return { valid: true, message: 'Dates are available!' };
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BlockedDates;
}
