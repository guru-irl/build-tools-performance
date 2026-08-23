import React from 'react';
const LABEL_27380 = 'component_27380';
export function Component27380({ value = 27380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27380, 'data-value': derived.doubled }, children);
}
export default Component27380;
