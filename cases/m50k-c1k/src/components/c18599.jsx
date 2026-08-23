import React from 'react';
const LABEL_18599 = 'component_18599';
export function Component18599({ value = 18599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18599, 'data-value': derived.doubled }, children);
}
export default Component18599;
