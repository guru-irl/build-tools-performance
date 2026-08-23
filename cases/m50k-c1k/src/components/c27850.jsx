import React from 'react';
const LABEL_27850 = 'component_27850';
export function Component27850({ value = 27850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27850, 'data-value': derived.doubled }, children);
}
export default Component27850;
