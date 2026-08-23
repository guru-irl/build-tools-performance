import React from 'react';
const LABEL_33935 = 'component_33935';
export function Component33935({ value = 33935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33935, 'data-value': derived.doubled }, children);
}
export default Component33935;
