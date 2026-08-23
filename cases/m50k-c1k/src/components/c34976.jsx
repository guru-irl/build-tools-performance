import React from 'react';
const LABEL_34976 = 'component_34976';
export function Component34976({ value = 34976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34976, 'data-value': derived.doubled }, children);
}
export default Component34976;
