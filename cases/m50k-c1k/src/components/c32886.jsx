import React from 'react';
const LABEL_32886 = 'component_32886';
export function Component32886({ value = 32886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32886, 'data-value': derived.doubled }, children);
}
export default Component32886;
