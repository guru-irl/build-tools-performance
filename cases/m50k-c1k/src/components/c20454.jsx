import React from 'react';
const LABEL_20454 = 'component_20454';
export function Component20454({ value = 20454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20454, 'data-value': derived.doubled }, children);
}
export default Component20454;
