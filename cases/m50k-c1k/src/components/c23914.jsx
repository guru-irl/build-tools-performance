import React from 'react';
const LABEL_23914 = 'component_23914';
export function Component23914({ value = 23914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23914, 'data-value': derived.doubled }, children);
}
export default Component23914;
