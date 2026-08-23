import React from 'react';
const LABEL_8981 = 'component_8981';
export function Component8981({ value = 8981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8981, 'data-value': derived.doubled }, children);
}
export default Component8981;
