import React from 'react';
const LABEL_27744 = 'component_27744';
export function Component27744({ value = 27744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27744, 'data-value': derived.doubled }, children);
}
export default Component27744;
