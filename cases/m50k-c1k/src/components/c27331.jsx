import React from 'react';
const LABEL_27331 = 'component_27331';
export function Component27331({ value = 27331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27331, 'data-value': derived.doubled }, children);
}
export default Component27331;
