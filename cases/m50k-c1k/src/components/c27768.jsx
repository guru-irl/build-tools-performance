import React from 'react';
const LABEL_27768 = 'component_27768';
export function Component27768({ value = 27768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27768, 'data-value': derived.doubled }, children);
}
export default Component27768;
