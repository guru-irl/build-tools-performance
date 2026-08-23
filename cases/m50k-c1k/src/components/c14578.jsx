import React from 'react';
const LABEL_14578 = 'component_14578';
export function Component14578({ value = 14578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14578, 'data-value': derived.doubled }, children);
}
export default Component14578;
