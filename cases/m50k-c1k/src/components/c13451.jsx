import React from 'react';
const LABEL_13451 = 'component_13451';
export function Component13451({ value = 13451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13451, 'data-value': derived.doubled }, children);
}
export default Component13451;
