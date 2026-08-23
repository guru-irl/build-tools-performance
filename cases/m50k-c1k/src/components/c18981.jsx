import React from 'react';
const LABEL_18981 = 'component_18981';
export function Component18981({ value = 18981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18981, 'data-value': derived.doubled }, children);
}
export default Component18981;
