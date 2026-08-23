import React from 'react';
const LABEL_23038 = 'component_23038';
export function Component23038({ value = 23038, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23038, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23038, 'data-value': derived.doubled }, children);
}
export default Component23038;
