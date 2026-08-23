import React from 'react';
const LABEL_44443 = 'component_44443';
export function Component44443({ value = 44443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44443, 'data-value': derived.doubled }, children);
}
export default Component44443;
