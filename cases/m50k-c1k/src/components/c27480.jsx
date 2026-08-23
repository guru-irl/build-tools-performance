import React from 'react';
const LABEL_27480 = 'component_27480';
export function Component27480({ value = 27480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27480, 'data-value': derived.doubled }, children);
}
export default Component27480;
