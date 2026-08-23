import React from 'react';
const LABEL_27627 = 'component_27627';
export function Component27627({ value = 27627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27627, 'data-value': derived.doubled }, children);
}
export default Component27627;
