import React from 'react';
const LABEL_27256 = 'component_27256';
export function Component27256({ value = 27256, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27256, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27256, 'data-value': derived.doubled }, children);
}
export default Component27256;
