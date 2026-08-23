import React from 'react';
const LABEL_18044 = 'component_18044';
export function Component18044({ value = 18044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18044, 'data-value': derived.doubled }, children);
}
export default Component18044;
