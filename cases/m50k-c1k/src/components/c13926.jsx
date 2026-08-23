import React from 'react';
const LABEL_13926 = 'component_13926';
export function Component13926({ value = 13926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13926, 'data-value': derived.doubled }, children);
}
export default Component13926;
