import React from 'react';
const LABEL_27298 = 'component_27298';
export function Component27298({ value = 27298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27298, 'data-value': derived.doubled }, children);
}
export default Component27298;
