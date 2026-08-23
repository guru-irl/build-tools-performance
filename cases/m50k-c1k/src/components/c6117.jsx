import React from 'react';
const LABEL_6117 = 'component_6117';
export function Component6117({ value = 6117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6117, 'data-value': derived.doubled }, children);
}
export default Component6117;
