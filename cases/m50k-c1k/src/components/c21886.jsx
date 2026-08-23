import React from 'react';
const LABEL_21886 = 'component_21886';
export function Component21886({ value = 21886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21886, 'data-value': derived.doubled }, children);
}
export default Component21886;
