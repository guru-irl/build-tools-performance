import React from 'react';
const LABEL_26938 = 'component_26938';
export function Component26938({ value = 26938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26938, 'data-value': derived.doubled }, children);
}
export default Component26938;
