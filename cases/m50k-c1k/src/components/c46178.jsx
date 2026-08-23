import React from 'react';
const LABEL_46178 = 'component_46178';
export function Component46178({ value = 46178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46178, 'data-value': derived.doubled }, children);
}
export default Component46178;
