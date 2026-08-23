import React from 'react';
const LABEL_11114 = 'component_11114';
export function Component11114({ value = 11114, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11114, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11114, 'data-value': derived.doubled }, children);
}
export default Component11114;
