import React from 'react';
const LABEL_11201 = 'component_11201';
export function Component11201({ value = 11201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11201, 'data-value': derived.doubled }, children);
}
export default Component11201;
