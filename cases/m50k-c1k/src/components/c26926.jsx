import React from 'react';
const LABEL_26926 = 'component_26926';
export function Component26926({ value = 26926, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26926, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26926, 'data-value': derived.doubled }, children);
}
export default Component26926;
