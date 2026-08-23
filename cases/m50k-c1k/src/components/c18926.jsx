import React from 'react';
const LABEL_18926 = 'component_18926';
export function Component18926({ value = 18926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18926, 'data-value': derived.doubled }, children);
}
export default Component18926;
