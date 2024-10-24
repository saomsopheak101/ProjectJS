"use strict";

function fullCalender() {

	/* initialize the external events */
	var containerEl = document.getElementById('external-events');
	if ($('#external-events').length > 0) {
		new FullCalendar.Draggable(containerEl, {
			itemSelector: '.external-event',
			eventData: function(eventEl) {
				return {
					title: eventEl.innerText.trim()
				};
			}
		});
	}

	/* initialize the calendar */
	var calendarEl = document.getElementById('calendar');
	var calendar = new FullCalendar.Calendar(calendarEl, {
		headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay'
		},

		selectable: true,
		selectMirror: true,
		select: function(arg) {
			var title = prompt('Event Title:');
			if (title) {
				calendar.addEvent({
					title: title,
					start: arg.start,
					end: arg.end,
					allDay: arg.allDay
				});
			}
			calendar.unselect();
		},

		editable: true,
		droppable: true, // this allows things to be dropped onto the calendar
		drop: function(arg) {
			if (document.getElementById('drop-remove').checked) {
				arg.draggedEl.parentNode.removeChild(arg.draggedEl);
			}
		},

		// Set initial date as today's date dynamically
		initialDate: new Date().toISOString().split('T')[0],
		weekNumbers: true,
		navLinks: true, // can click day/week names to navigate views
		nowIndicator: true,
		events: [
			{
				title: 'All Day Event',
				start: '2024-10-01'  // October 1st, 2024
			},
			{
				title: 'Long Event',
				start: '2024-29-07',  // Starts October 7th, 2024
				end: '2024-10-10',    // Ends October 10th, 2024
				className: "bg-danger"
			},
			{
				groupId: 999,
				title: 'Repeating Event',
				start: '2024-4-09T16:00:00'  // October 9th, 2024 at 4:00 PM
			},
			{
				groupId: 999,
				title: 'Repeating Event',
				start: '2024-10-16T16:00:00'  // October 16th, 2024 at 4:00 PM
			},
			{
				title: 'Conference',
				start: '2024-10-11',  // October 11th, 2024
				end: '2024-10-13',    // Ends October 13th, 2024
				className: "bg-danger"
			},
			{
				title: 'Lunch',
				start: '2024-10-14T12:00:00'  // October 12th, 2024 at 12:00 PM
			},
			{
				title: 'Meeting',
				start: '2024-10-19T14:30:00'  // October 12th, 2024 at 2:30 PM
			},
			{
				title: 'Happy Hour',
				start: '2024-10-23T17:30:00'  // October 12th, 2024 at 5:30 PM
			},
			{
				title: 'Dinner',
				start: '2024-10-22T20:00:00',  // October 12th, 2024 at 8:00 PM
				className: "bg-warning"
			},
			{
				title: 'Birthday Party',
				start: '2024-10-10T07:00:00',  // October 13th, 2024 at 7:00 AM
				className: "bg-secondary"
			},
			{
				title: 'Click for Google',
				url: 'http://google.com/',
				start: '2024-11-28'  // November 28th, 2024
			}
		]
		
	});

	// Render the calendar after ensuring the page is fully loaded
	setTimeout(function() {
		calendar.render();  // Render the calendar once the page is ready
	}, 1500);  // Delay added to ensure everything is fully loaded
}

// Ensure full page load before initializing the calendar
jQuery(window).on('load', function() {
	setTimeout(function() {
		fullCalender();  // Initialize the calendar after the page loads
	}, 1500);  // Slight delay added to ensure all resources are fully loaded
});
