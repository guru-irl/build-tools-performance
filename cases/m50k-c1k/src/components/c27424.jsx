import React from 'react';
const LABEL_27424 = 'component_27424';
export function Component27424({ value = 27424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27424, 'data-value': derived.doubled }, children);
}
export default Component27424;
