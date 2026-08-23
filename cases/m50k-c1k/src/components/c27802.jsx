import React from 'react';
const LABEL_27802 = 'component_27802';
export function Component27802({ value = 27802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27802, 'data-value': derived.doubled }, children);
}
export default Component27802;
