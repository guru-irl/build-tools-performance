import React from 'react';
const LABEL_27955 = 'component_27955';
export function Component27955({ value = 27955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27955, 'data-value': derived.doubled }, children);
}
export default Component27955;
