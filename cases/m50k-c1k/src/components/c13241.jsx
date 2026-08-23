import React from 'react';
const LABEL_13241 = 'component_13241';
export function Component13241({ value = 13241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13241, 'data-value': derived.doubled }, children);
}
export default Component13241;
