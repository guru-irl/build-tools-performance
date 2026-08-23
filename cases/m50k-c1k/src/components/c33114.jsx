import React from 'react';
const LABEL_33114 = 'component_33114';
export function Component33114({ value = 33114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33114, 'data-value': derived.doubled }, children);
}
export default Component33114;
