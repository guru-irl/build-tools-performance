import React from 'react';
const LABEL_33886 = 'component_33886';
export function Component33886({ value = 33886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33886, 'data-value': derived.doubled }, children);
}
export default Component33886;
