import React from 'react';
const LABEL_14886 = 'component_14886';
export function Component14886({ value = 14886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14886, 'data-value': derived.doubled }, children);
}
export default Component14886;
