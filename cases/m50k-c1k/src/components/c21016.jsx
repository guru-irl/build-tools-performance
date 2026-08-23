import React from 'react';
const LABEL_21016 = 'component_21016';
export function Component21016({ value = 21016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21016, 'data-value': derived.doubled }, children);
}
export default Component21016;
