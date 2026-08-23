import React from 'react';
const LABEL_26232 = 'component_26232';
export function Component26232({ value = 26232, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26232, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26232, 'data-value': derived.doubled }, children);
}
export default Component26232;
