import React from 'react';
const LABEL_27661 = 'component_27661';
export function Component27661({ value = 27661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27661, 'data-value': derived.doubled }, children);
}
export default Component27661;
