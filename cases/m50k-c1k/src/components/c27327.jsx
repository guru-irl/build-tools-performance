import React from 'react';
const LABEL_27327 = 'component_27327';
export function Component27327({ value = 27327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27327, 'data-value': derived.doubled }, children);
}
export default Component27327;
