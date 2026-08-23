import React from 'react';
const LABEL_26886 = 'component_26886';
export function Component26886({ value = 26886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26886, 'data-value': derived.doubled }, children);
}
export default Component26886;
