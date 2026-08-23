import React from 'react';
const LABEL_114 = 'component_114';
export function Component114({ value = 114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_114, 'data-value': derived.doubled }, children);
}
export default Component114;
