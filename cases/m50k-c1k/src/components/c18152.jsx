import React from 'react';
const LABEL_18152 = 'component_18152';
export function Component18152({ value = 18152, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18152, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18152, 'data-value': derived.doubled }, children);
}
export default Component18152;
