import React from 'react';
const LABEL_39218 = 'component_39218';
export function Component39218({ value = 39218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39218, 'data-value': derived.doubled }, children);
}
export default Component39218;
