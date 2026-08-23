import React from 'react';
const LABEL_15259 = 'component_15259';
export function Component15259({ value = 15259, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15259, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15259, 'data-value': derived.doubled }, children);
}
export default Component15259;
