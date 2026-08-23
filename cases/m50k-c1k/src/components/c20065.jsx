import React from 'react';
const LABEL_20065 = 'component_20065';
export function Component20065({ value = 20065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20065, 'data-value': derived.doubled }, children);
}
export default Component20065;
