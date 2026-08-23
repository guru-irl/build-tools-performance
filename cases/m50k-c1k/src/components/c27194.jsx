import React from 'react';
const LABEL_27194 = 'component_27194';
export function Component27194({ value = 27194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27194, 'data-value': derived.doubled }, children);
}
export default Component27194;
