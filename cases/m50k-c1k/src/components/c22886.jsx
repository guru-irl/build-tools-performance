import React from 'react';
const LABEL_22886 = 'component_22886';
export function Component22886({ value = 22886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22886, 'data-value': derived.doubled }, children);
}
export default Component22886;
