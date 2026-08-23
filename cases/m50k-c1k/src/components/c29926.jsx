import React from 'react';
const LABEL_29926 = 'component_29926';
export function Component29926({ value = 29926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29926, 'data-value': derived.doubled }, children);
}
export default Component29926;
