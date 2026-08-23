import React from 'react';
const LABEL_15938 = 'component_15938';
export function Component15938({ value = 15938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15938, 'data-value': derived.doubled }, children);
}
export default Component15938;
