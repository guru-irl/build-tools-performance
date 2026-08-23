import React from 'react';
const LABEL_27930 = 'component_27930';
export function Component27930({ value = 27930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27930, 'data-value': derived.doubled }, children);
}
export default Component27930;
