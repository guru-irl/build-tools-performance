import React from 'react';
const LABEL_42128 = 'component_42128';
export function Component42128({ value = 42128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42128, 'data-value': derived.doubled }, children);
}
export default Component42128;
