import React from 'react';
const LABEL_35926 = 'component_35926';
export function Component35926({ value = 35926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35926, 'data-value': derived.doubled }, children);
}
export default Component35926;
