import React from 'react';
const LABEL_25098 = 'component_25098';
export function Component25098({ value = 25098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25098, 'data-value': derived.doubled }, children);
}
export default Component25098;
