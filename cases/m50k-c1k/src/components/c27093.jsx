import React from 'react';
const LABEL_27093 = 'component_27093';
export function Component27093({ value = 27093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27093, 'data-value': derived.doubled }, children);
}
export default Component27093;
