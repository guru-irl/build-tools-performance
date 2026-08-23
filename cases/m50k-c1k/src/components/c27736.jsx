import React from 'react';
const LABEL_27736 = 'component_27736';
export function Component27736({ value = 27736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27736, 'data-value': derived.doubled }, children);
}
export default Component27736;
