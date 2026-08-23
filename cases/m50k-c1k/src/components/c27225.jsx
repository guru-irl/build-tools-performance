import React from 'react';
const LABEL_27225 = 'component_27225';
export function Component27225({ value = 27225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27225, 'data-value': derived.doubled }, children);
}
export default Component27225;
