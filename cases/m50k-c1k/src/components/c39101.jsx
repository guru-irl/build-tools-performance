import React from 'react';
const LABEL_39101 = 'component_39101';
export function Component39101({ value = 39101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39101, 'data-value': derived.doubled }, children);
}
export default Component39101;
