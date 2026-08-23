import React from 'react';
const LABEL_20206 = 'component_20206';
export function Component20206({ value = 20206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20206, 'data-value': derived.doubled }, children);
}
export default Component20206;
