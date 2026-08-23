import React from 'react';
const LABEL_28012 = 'component_28012';
export function Component28012({ value = 28012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28012, 'data-value': derived.doubled }, children);
}
export default Component28012;
