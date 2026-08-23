import React from 'react';
const LABEL_33188 = 'component_33188';
export function Component33188({ value = 33188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33188, 'data-value': derived.doubled }, children);
}
export default Component33188;
