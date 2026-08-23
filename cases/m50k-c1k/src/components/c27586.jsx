import React from 'react';
const LABEL_27586 = 'component_27586';
export function Component27586({ value = 27586, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27586, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27586, 'data-value': derived.doubled }, children);
}
export default Component27586;
