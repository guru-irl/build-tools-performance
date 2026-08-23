import React from 'react';
const LABEL_39601 = 'component_39601';
export function Component39601({ value = 39601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39601, 'data-value': derived.doubled }, children);
}
export default Component39601;
