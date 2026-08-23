import React from 'react';
const LABEL_27807 = 'component_27807';
export function Component27807({ value = 27807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27807, 'data-value': derived.doubled }, children);
}
export default Component27807;
