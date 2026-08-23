import React from 'react';
const LABEL_40377 = 'component_40377';
export function Component40377({ value = 40377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40377, 'data-value': derived.doubled }, children);
}
export default Component40377;
