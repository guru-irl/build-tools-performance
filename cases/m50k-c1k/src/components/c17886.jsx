import React from 'react';
const LABEL_17886 = 'component_17886';
export function Component17886({ value = 17886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17886, 'data-value': derived.doubled }, children);
}
export default Component17886;
