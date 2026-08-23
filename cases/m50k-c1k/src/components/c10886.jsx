import React from 'react';
const LABEL_10886 = 'component_10886';
export function Component10886({ value = 10886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10886, 'data-value': derived.doubled }, children);
}
export default Component10886;
