import React from 'react';
const LABEL_20484 = 'component_20484';
export function Component20484({ value = 20484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20484, 'data-value': derived.doubled }, children);
}
export default Component20484;
