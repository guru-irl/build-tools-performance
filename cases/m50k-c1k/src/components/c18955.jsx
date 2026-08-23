import React from 'react';
const LABEL_18955 = 'component_18955';
export function Component18955({ value = 18955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18955, 'data-value': derived.doubled }, children);
}
export default Component18955;
