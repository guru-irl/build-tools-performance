import React from 'react';
const LABEL_27499 = 'component_27499';
export function Component27499({ value = 27499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27499, 'data-value': derived.doubled }, children);
}
export default Component27499;
