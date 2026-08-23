import React from 'react';
const LABEL_27281 = 'component_27281';
export function Component27281({ value = 27281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27281, 'data-value': derived.doubled }, children);
}
export default Component27281;
