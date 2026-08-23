import React from 'react';
const LABEL_12886 = 'component_12886';
export function Component12886({ value = 12886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12886, 'data-value': derived.doubled }, children);
}
export default Component12886;
