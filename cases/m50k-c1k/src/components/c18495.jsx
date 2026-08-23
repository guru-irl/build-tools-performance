import React from 'react';
const LABEL_18495 = 'component_18495';
export function Component18495({ value = 18495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18495, 'data-value': derived.doubled }, children);
}
export default Component18495;
