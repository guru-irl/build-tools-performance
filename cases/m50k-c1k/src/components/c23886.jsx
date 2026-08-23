import React from 'react';
const LABEL_23886 = 'component_23886';
export function Component23886({ value = 23886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23886, 'data-value': derived.doubled }, children);
}
export default Component23886;
