import React from 'react';
const LABEL_27616 = 'component_27616';
export function Component27616({ value = 27616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27616, 'data-value': derived.doubled }, children);
}
export default Component27616;
