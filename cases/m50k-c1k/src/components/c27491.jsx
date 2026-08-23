import React from 'react';
const LABEL_27491 = 'component_27491';
export function Component27491({ value = 27491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27491, 'data-value': derived.doubled }, children);
}
export default Component27491;
