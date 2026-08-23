import React from 'react';
const LABEL_27342 = 'component_27342';
export function Component27342({ value = 27342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27342, 'data-value': derived.doubled }, children);
}
export default Component27342;
