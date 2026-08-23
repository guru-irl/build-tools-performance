import React from 'react';
const LABEL_27126 = 'component_27126';
export function Component27126({ value = 27126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27126, 'data-value': derived.doubled }, children);
}
export default Component27126;
