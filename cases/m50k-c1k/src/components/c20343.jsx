import React from 'react';
const LABEL_20343 = 'component_20343';
export function Component20343({ value = 20343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20343, 'data-value': derived.doubled }, children);
}
export default Component20343;
