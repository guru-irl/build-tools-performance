import React from 'react';
const LABEL_20034 = 'component_20034';
export function Component20034({ value = 20034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20034, 'data-value': derived.doubled }, children);
}
export default Component20034;
