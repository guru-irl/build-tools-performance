import React from 'react';
const LABEL_938 = 'component_938';
export function Component938({ value = 938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_938, 'data-value': derived.doubled }, children);
}
export default Component938;
