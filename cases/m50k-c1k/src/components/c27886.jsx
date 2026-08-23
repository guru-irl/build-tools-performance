import React from 'react';
const LABEL_27886 = 'component_27886';
export function Component27886({ value = 27886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27886, 'data-value': derived.doubled }, children);
}
export default Component27886;
