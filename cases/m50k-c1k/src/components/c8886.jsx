import React from 'react';
const LABEL_8886 = 'component_8886';
export function Component8886({ value = 8886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8886, 'data-value': derived.doubled }, children);
}
export default Component8886;
