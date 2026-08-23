import React from 'react';
const LABEL_34578 = 'component_34578';
export function Component34578({ value = 34578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34578, 'data-value': derived.doubled }, children);
}
export default Component34578;
