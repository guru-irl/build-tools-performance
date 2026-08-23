import React from 'react';
const LABEL_45402 = 'component_45402';
export function Component45402({ value = 45402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45402, 'data-value': derived.doubled }, children);
}
export default Component45402;
