import React from 'react';
const LABEL_44178 = 'component_44178';
export function Component44178({ value = 44178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44178, 'data-value': derived.doubled }, children);
}
export default Component44178;
