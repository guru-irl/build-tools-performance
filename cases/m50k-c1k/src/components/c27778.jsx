import React from 'react';
const LABEL_27778 = 'component_27778';
export function Component27778({ value = 27778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27778, 'data-value': derived.doubled }, children);
}
export default Component27778;
