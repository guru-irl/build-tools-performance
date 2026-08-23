import React from 'react';
const LABEL_27901 = 'component_27901';
export function Component27901({ value = 27901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27901, 'data-value': derived.doubled }, children);
}
export default Component27901;
