import React from 'react';
const LABEL_27877 = 'component_27877';
export function Component27877({ value = 27877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27877, 'data-value': derived.doubled }, children);
}
export default Component27877;
