import React from 'react';
const LABEL_20558 = 'component_20558';
export function Component20558({ value = 20558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20558, 'data-value': derived.doubled }, children);
}
export default Component20558;
