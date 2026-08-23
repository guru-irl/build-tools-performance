import React from 'react';
const LABEL_28241 = 'component_28241';
export function Component28241({ value = 28241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28241, 'data-value': derived.doubled }, children);
}
export default Component28241;
