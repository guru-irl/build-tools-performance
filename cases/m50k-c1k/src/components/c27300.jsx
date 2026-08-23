import React from 'react';
const LABEL_27300 = 'component_27300';
export function Component27300({ value = 27300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27300, 'data-value': derived.doubled }, children);
}
export default Component27300;
