import React from 'react';
const LABEL_37578 = 'component_37578';
export function Component37578({ value = 37578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37578, 'data-value': derived.doubled }, children);
}
export default Component37578;
