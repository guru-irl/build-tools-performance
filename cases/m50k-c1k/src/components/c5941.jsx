import React from 'react';
const LABEL_5941 = 'component_5941';
export function Component5941({ value = 5941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5941, 'data-value': derived.doubled }, children);
}
export default Component5941;
