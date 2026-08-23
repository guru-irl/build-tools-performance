import React from 'react';
const LABEL_7938 = 'component_7938';
export function Component7938({ value = 7938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7938, 'data-value': derived.doubled }, children);
}
export default Component7938;
