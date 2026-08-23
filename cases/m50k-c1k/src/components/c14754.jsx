import React from 'react';
const LABEL_14754 = 'component_14754';
export function Component14754({ value = 14754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14754, 'data-value': derived.doubled }, children);
}
export default Component14754;
