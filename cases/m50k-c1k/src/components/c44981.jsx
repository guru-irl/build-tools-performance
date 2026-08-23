import React from 'react';
const LABEL_44981 = 'component_44981';
export function Component44981({ value = 44981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44981, 'data-value': derived.doubled }, children);
}
export default Component44981;
