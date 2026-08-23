import React from 'react';
const LABEL_26081 = 'component_26081';
export function Component26081({ value = 26081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26081, 'data-value': derived.doubled }, children);
}
export default Component26081;
