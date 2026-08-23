import React from 'react';
const LABEL_23231 = 'component_23231';
export function Component23231({ value = 23231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23231, 'data-value': derived.doubled }, children);
}
export default Component23231;
