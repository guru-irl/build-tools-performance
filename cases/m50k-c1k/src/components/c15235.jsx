import React from 'react';
const LABEL_15235 = 'component_15235';
export function Component15235({ value = 15235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15235, 'data-value': derived.doubled }, children);
}
export default Component15235;
