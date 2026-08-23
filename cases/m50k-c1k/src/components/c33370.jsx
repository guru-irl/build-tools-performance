import React from 'react';
const LABEL_33370 = 'component_33370';
export function Component33370({ value = 33370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33370, 'data-value': derived.doubled }, children);
}
export default Component33370;
