import React from 'react';
const LABEL_36438 = 'component_36438';
export function Component36438({ value = 36438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36438, 'data-value': derived.doubled }, children);
}
export default Component36438;
