"use strict";

function initializeCalendar() {
  /* Initialize the external events */
  const containerEl = document.getElementById('external-events');
  if (containerEl) {
    new FullCalendar.Draggable(containerEl, {
      itemSelector: '.external-event',
      eventData: function(eventEl) {
        return {
          title: eventEl.innerText.trim()
        };
      }
    });
  }

  /* Initialize the calendar */
  const calendarEl = document.getElementById('calendar');
  if (calendarEl) {
    const calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      initialDate: new Date().toISOString().split('T')[0],
      selectable: true,
      selectMirror: true,
      editable: true,
      droppable: true,
      weekNumbers: true,
      navLinks: true,
      nowIndicator: true,
      events: [
        {
          title: 'All Day Event',
          start: '2024-10-01'
        },
        {
          title: 'Long Event',
          start: '2024-10-07',
          end: '2024-10-10',
          className: "bg-danger"
        },
        // ... (add remaining events here)
      ],
      select: function(arg) {
        const title = prompt('Event Title:');
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
      drop: function(arg) {
        if (document.getElementById('drop-remove').checked) {
          arg.draggedEl.parentNode.removeChild(arg.draggedEl);
        }
      }
    });

    // Render the calendar once DOM content is fully loaded
    calendar.render();

    // Adjust calendar size on container resize
    const resizeObserver = new ResizeObserver(() => {
      calendar.updateSize();
    });
    resizeObserver.observe(calendarEl);
  }
}

// Initialize the calendar on DOMContentLoaded
document.addEventListener("DOMContentLoaded", initializeCalendar);
