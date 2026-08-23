import React from 'react';
const LABEL_27706 = 'component_27706';
export function Component27706({ value = 27706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27706, 'data-value': derived.doubled }, children);
}
export default Component27706;
