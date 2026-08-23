import React from 'react';
const LABEL_23868 = 'component_23868';
export function Component23868({ value = 23868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23868, 'data-value': derived.doubled }, children);
}
export default Component23868;
