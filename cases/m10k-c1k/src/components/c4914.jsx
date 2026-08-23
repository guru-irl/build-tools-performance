import React from 'react';
const LABEL_4914 = 'component_4914';
export function Component4914({ value = 4914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4914, 'data-value': derived.doubled }, children);
}
export default Component4914;
