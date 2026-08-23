import React from 'react';
const LABEL_33498 = 'component_33498';
export function Component33498({ value = 33498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33498, 'data-value': derived.doubled }, children);
}
export default Component33498;
