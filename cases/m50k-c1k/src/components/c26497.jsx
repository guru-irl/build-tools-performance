import React from 'react';
const LABEL_26497 = 'component_26497';
export function Component26497({ value = 26497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26497, 'data-value': derived.doubled }, children);
}
export default Component26497;
