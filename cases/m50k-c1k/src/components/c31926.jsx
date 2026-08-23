import React from 'react';
const LABEL_31926 = 'component_31926';
export function Component31926({ value = 31926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31926, 'data-value': derived.doubled }, children);
}
export default Component31926;
