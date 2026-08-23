import React from 'react';
const LABEL_27800 = 'component_27800';
export function Component27800({ value = 27800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27800, 'data-value': derived.doubled }, children);
}
export default Component27800;
