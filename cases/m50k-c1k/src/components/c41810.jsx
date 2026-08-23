import React from 'react';
const LABEL_41810 = 'component_41810';
export function Component41810({ value = 41810, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41810, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41810, 'data-value': derived.doubled }, children);
}
export default Component41810;
