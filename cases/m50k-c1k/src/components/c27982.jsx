import React from 'react';
const LABEL_27982 = 'component_27982';
export function Component27982({ value = 27982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27982, 'data-value': derived.doubled }, children);
}
export default Component27982;
