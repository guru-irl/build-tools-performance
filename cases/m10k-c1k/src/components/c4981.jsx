import React from 'react';
const LABEL_4981 = 'component_4981';
export function Component4981({ value = 4981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4981, 'data-value': derived.doubled }, children);
}
export default Component4981;
