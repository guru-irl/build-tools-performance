import React from 'react';
const LABEL_27996 = 'component_27996';
export function Component27996({ value = 27996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27996, 'data-value': derived.doubled }, children);
}
export default Component27996;
