import React from 'react';
const LABEL_27570 = 'component_27570';
export function Component27570({ value = 27570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27570, 'data-value': derived.doubled }, children);
}
export default Component27570;
