import React from 'react';
const LABEL_17114 = 'component_17114';
export function Component17114({ value = 17114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17114, 'data-value': derived.doubled }, children);
}
export default Component17114;
