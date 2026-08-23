import React from 'react';
const LABEL_31886 = 'component_31886';
export function Component31886({ value = 31886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31886, 'data-value': derived.doubled }, children);
}
export default Component31886;
