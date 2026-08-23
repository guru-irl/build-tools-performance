import React from 'react';
const LABEL_33938 = 'component_33938';
export function Component33938({ value = 33938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33938, 'data-value': derived.doubled }, children);
}
export default Component33938;
