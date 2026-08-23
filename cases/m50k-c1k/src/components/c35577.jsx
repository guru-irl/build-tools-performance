import React from 'react';
const LABEL_35577 = 'component_35577';
export function Component35577({ value = 35577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35577, 'data-value': derived.doubled }, children);
}
export default Component35577;
