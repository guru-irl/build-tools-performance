import React from 'react';
const LABEL_28233 = 'component_28233';
export function Component28233({ value = 28233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28233, 'data-value': derived.doubled }, children);
}
export default Component28233;
