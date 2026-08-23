import React from 'react';
const LABEL_27568 = 'component_27568';
export function Component27568({ value = 27568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27568, 'data-value': derived.doubled }, children);
}
export default Component27568;
