import React from 'react';
const LABEL_34676 = 'component_34676';
export function Component34676({ value = 34676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34676, 'data-value': derived.doubled }, children);
}
export default Component34676;
