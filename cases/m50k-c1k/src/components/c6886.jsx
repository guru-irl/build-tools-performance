import React from 'react';
const LABEL_6886 = 'component_6886';
export function Component6886({ value = 6886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6886, 'data-value': derived.doubled }, children);
}
export default Component6886;
