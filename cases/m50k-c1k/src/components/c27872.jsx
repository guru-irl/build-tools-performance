import React from 'react';
const LABEL_27872 = 'component_27872';
export function Component27872({ value = 27872, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27872, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27872, 'data-value': derived.doubled }, children);
}
export default Component27872;
