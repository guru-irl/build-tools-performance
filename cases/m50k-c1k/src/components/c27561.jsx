import React from 'react';
const LABEL_27561 = 'component_27561';
export function Component27561({ value = 27561, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27561, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27561, 'data-value': derived.doubled }, children);
}
export default Component27561;
