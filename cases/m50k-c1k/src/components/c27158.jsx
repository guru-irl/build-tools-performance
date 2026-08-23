import React from 'react';
const LABEL_27158 = 'component_27158';
export function Component27158({ value = 27158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27158, 'data-value': derived.doubled }, children);
}
export default Component27158;
