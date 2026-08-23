import React from 'react';
const LABEL_34454 = 'component_34454';
export function Component34454({ value = 34454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34454, 'data-value': derived.doubled }, children);
}
export default Component34454;
