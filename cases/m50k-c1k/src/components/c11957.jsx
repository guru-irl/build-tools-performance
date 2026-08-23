import React from 'react';
const LABEL_11957 = 'component_11957';
export function Component11957({ value = 11957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11957, 'data-value': derived.doubled }, children);
}
export default Component11957;
