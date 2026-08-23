import React from 'react';
const LABEL_27338 = 'component_27338';
export function Component27338({ value = 27338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27338, 'data-value': derived.doubled }, children);
}
export default Component27338;
