import React from 'react';
const LABEL_4247 = 'component_4247';
export function Component4247({ value = 4247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4247, 'data-value': derived.doubled }, children);
}
export default Component4247;
