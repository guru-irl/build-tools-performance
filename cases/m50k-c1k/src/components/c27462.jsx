import React from 'react';
const LABEL_27462 = 'component_27462';
export function Component27462({ value = 27462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27462, 'data-value': derived.doubled }, children);
}
export default Component27462;
