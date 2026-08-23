import React from 'react';
const LABEL_18886 = 'component_18886';
export function Component18886({ value = 18886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18886, 'data-value': derived.doubled }, children);
}
export default Component18886;
