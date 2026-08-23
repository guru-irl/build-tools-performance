import React from 'react';
const LABEL_27551 = 'component_27551';
export function Component27551({ value = 27551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27551, 'data-value': derived.doubled }, children);
}
export default Component27551;
