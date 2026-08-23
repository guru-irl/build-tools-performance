import React from 'react';
const LABEL_39170 = 'component_39170';
export function Component39170({ value = 39170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39170, 'data-value': derived.doubled }, children);
}
export default Component39170;
