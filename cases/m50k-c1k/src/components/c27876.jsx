import React from 'react';
const LABEL_27876 = 'component_27876';
export function Component27876({ value = 27876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27876, 'data-value': derived.doubled }, children);
}
export default Component27876;
