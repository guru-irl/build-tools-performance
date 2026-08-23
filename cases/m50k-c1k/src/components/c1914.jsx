import React from 'react';
const LABEL_1914 = 'component_1914';
export function Component1914({ value = 1914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1914, 'data-value': derived.doubled }, children);
}
export default Component1914;
