import React from 'react';
const LABEL_27285 = 'component_27285';
export function Component27285({ value = 27285, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27285, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27285, 'data-value': derived.doubled }, children);
}
export default Component27285;
