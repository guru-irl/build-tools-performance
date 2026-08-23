import React from 'react';
const LABEL_13886 = 'component_13886';
export function Component13886({ value = 13886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13886, 'data-value': derived.doubled }, children);
}
export default Component13886;
