import React from 'react';
const LABEL_36886 = 'component_36886';
export function Component36886({ value = 36886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36886, 'data-value': derived.doubled }, children);
}
export default Component36886;
