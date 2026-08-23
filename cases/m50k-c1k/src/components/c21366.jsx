import React from 'react';
const LABEL_21366 = 'component_21366';
export function Component21366({ value = 21366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21366, 'data-value': derived.doubled }, children);
}
export default Component21366;
