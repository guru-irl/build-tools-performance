import React from 'react';
const LABEL_28886 = 'component_28886';
export function Component28886({ value = 28886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28886, 'data-value': derived.doubled }, children);
}
export default Component28886;
