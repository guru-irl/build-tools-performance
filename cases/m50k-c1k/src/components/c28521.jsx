import React from 'react';
const LABEL_28521 = 'component_28521';
export function Component28521({ value = 28521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28521, 'data-value': derived.doubled }, children);
}
export default Component28521;
