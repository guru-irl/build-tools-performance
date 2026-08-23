import React from 'react';
const LABEL_27925 = 'component_27925';
export function Component27925({ value = 27925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27925, 'data-value': derived.doubled }, children);
}
export default Component27925;
