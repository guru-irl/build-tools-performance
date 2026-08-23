import React from 'react';
const LABEL_21819 = 'component_21819';
export function Component21819({ value = 21819, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21819, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21819, 'data-value': derived.doubled }, children);
}
export default Component21819;
