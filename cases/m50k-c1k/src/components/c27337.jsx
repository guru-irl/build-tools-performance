import React from 'react';
const LABEL_27337 = 'component_27337';
export function Component27337({ value = 27337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27337, 'data-value': derived.doubled }, children);
}
export default Component27337;
