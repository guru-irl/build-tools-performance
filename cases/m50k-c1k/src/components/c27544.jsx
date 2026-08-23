import React from 'react';
const LABEL_27544 = 'component_27544';
export function Component27544({ value = 27544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27544, 'data-value': derived.doubled }, children);
}
export default Component27544;
