import React from 'react';
const LABEL_32707 = 'component_32707';
export function Component32707({ value = 32707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32707, 'data-value': derived.doubled }, children);
}
export default Component32707;
