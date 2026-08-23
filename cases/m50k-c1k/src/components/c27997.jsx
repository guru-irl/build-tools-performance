import React from 'react';
const LABEL_27997 = 'component_27997';
export function Component27997({ value = 27997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27997, 'data-value': derived.doubled }, children);
}
export default Component27997;
