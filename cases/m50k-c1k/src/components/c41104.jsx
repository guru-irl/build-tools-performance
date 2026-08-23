import React from 'react';
const LABEL_41104 = 'component_41104';
export function Component41104({ value = 41104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41104, 'data-value': derived.doubled }, children);
}
export default Component41104;
