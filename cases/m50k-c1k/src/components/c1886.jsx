import React from 'react';
const LABEL_1886 = 'component_1886';
export function Component1886({ value = 1886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1886, 'data-value': derived.doubled }, children);
}
export default Component1886;
