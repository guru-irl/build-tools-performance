import React from 'react';
const LABEL_39577 = 'component_39577';
export function Component39577({ value = 39577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39577, 'data-value': derived.doubled }, children);
}
export default Component39577;
