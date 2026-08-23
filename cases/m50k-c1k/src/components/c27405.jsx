import React from 'react';
const LABEL_27405 = 'component_27405';
export function Component27405({ value = 27405, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27405, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27405, 'data-value': derived.doubled }, children);
}
export default Component27405;
