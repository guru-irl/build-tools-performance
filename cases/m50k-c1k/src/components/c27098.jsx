import React from 'react';
const LABEL_27098 = 'component_27098';
export function Component27098({ value = 27098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27098, 'data-value': derived.doubled }, children);
}
export default Component27098;
