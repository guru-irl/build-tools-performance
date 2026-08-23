import React from 'react';
const LABEL_27464 = 'component_27464';
export function Component27464({ value = 27464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27464, 'data-value': derived.doubled }, children);
}
export default Component27464;
