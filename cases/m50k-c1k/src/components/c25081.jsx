import React from 'react';
const LABEL_25081 = 'component_25081';
export function Component25081({ value = 25081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25081, 'data-value': derived.doubled }, children);
}
export default Component25081;
