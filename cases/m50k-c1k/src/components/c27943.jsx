import React from 'react';
const LABEL_27943 = 'component_27943';
export function Component27943({ value = 27943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27943, 'data-value': derived.doubled }, children);
}
export default Component27943;
