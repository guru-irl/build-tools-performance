import React from 'react';
const LABEL_5938 = 'component_5938';
export function Component5938({ value = 5938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5938, 'data-value': derived.doubled }, children);
}
export default Component5938;
