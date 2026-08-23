import React from 'react';
const LABEL_11178 = 'component_11178';
export function Component11178({ value = 11178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11178, 'data-value': derived.doubled }, children);
}
export default Component11178;
