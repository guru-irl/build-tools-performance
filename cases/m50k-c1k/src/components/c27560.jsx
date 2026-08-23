import React from 'react';
const LABEL_27560 = 'component_27560';
export function Component27560({ value = 27560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27560, 'data-value': derived.doubled }, children);
}
export default Component27560;
