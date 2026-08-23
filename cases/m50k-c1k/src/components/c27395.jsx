import React from 'react';
const LABEL_27395 = 'component_27395';
export function Component27395({ value = 27395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27395, 'data-value': derived.doubled }, children);
}
export default Component27395;
