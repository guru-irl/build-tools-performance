import React from 'react';
const LABEL_22630 = 'component_22630';
export function Component22630({ value = 22630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22630, 'data-value': derived.doubled }, children);
}
export default Component22630;
