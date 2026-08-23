import React from 'react';
const LABEL_27210 = 'component_27210';
export function Component27210({ value = 27210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27210, 'data-value': derived.doubled }, children);
}
export default Component27210;
