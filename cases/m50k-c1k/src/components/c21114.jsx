import React from 'react';
const LABEL_21114 = 'component_21114';
export function Component21114({ value = 21114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21114, 'data-value': derived.doubled }, children);
}
export default Component21114;
