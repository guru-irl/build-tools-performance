import React from 'react';
const LABEL_27477 = 'component_27477';
export function Component27477({ value = 27477, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27477, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27477, 'data-value': derived.doubled }, children);
}
export default Component27477;
