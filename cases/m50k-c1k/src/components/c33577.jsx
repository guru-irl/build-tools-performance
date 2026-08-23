import React from 'react';
const LABEL_33577 = 'component_33577';
export function Component33577({ value = 33577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33577, 'data-value': derived.doubled }, children);
}
export default Component33577;
