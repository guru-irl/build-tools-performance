import React from 'react';
const LABEL_27660 = 'component_27660';
export function Component27660({ value = 27660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27660, 'data-value': derived.doubled }, children);
}
export default Component27660;
