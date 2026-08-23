import React from 'react';
const LABEL_32443 = 'component_32443';
export function Component32443({ value = 32443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32443, 'data-value': derived.doubled }, children);
}
export default Component32443;
