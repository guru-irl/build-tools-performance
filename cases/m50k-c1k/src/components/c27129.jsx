import React from 'react';
const LABEL_27129 = 'component_27129';
export function Component27129({ value = 27129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27129, 'data-value': derived.doubled }, children);
}
export default Component27129;
