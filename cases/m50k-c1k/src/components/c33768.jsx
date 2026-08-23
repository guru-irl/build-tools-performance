import React from 'react';
const LABEL_33768 = 'component_33768';
export function Component33768({ value = 33768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33768, 'data-value': derived.doubled }, children);
}
export default Component33768;
