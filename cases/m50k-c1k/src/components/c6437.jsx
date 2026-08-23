import React from 'react';
const LABEL_6437 = 'component_6437';
export function Component6437({ value = 6437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6437, 'data-value': derived.doubled }, children);
}
export default Component6437;
