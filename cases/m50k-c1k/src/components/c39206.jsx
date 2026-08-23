import React from 'react';
const LABEL_39206 = 'component_39206';
export function Component39206({ value = 39206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39206, 'data-value': derived.doubled }, children);
}
export default Component39206;
