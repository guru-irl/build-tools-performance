import React from 'react';
const LABEL_27847 = 'component_27847';
export function Component27847({ value = 27847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27847, 'data-value': derived.doubled }, children);
}
export default Component27847;
