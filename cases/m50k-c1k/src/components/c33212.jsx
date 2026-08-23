import React from 'react';
const LABEL_33212 = 'component_33212';
export function Component33212({ value = 33212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33212, 'data-value': derived.doubled }, children);
}
export default Component33212;
