import React from 'react';
const LABEL_23258 = 'component_23258';
export function Component23258({ value = 23258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23258, 'data-value': derived.doubled }, children);
}
export default Component23258;
