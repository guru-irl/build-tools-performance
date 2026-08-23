import React from 'react';
const LABEL_20101 = 'component_20101';
export function Component20101({ value = 20101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20101, 'data-value': derived.doubled }, children);
}
export default Component20101;
