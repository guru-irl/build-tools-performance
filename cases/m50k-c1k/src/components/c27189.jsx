import React from 'react';
const LABEL_27189 = 'component_27189';
export function Component27189({ value = 27189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27189, 'data-value': derived.doubled }, children);
}
export default Component27189;
