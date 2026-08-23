import React from 'react';
const LABEL_33512 = 'component_33512';
export function Component33512({ value = 33512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33512, 'data-value': derived.doubled }, children);
}
export default Component33512;
