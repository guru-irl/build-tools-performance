import React from 'react';
const LABEL_28981 = 'component_28981';
export function Component28981({ value = 28981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28981, 'data-value': derived.doubled }, children);
}
export default Component28981;
