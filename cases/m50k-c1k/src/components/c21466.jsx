import React from 'react';
const LABEL_21466 = 'component_21466';
export function Component21466({ value = 21466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21466, 'data-value': derived.doubled }, children);
}
export default Component21466;
