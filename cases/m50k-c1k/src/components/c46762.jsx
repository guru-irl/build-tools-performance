import React from 'react';
const LABEL_46762 = 'component_46762';
export function Component46762({ value = 46762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46762, 'data-value': derived.doubled }, children);
}
export default Component46762;
