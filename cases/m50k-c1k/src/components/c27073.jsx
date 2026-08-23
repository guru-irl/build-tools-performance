import React from 'react';
const LABEL_27073 = 'component_27073';
export function Component27073({ value = 27073, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27073, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27073, 'data-value': derived.doubled }, children);
}
export default Component27073;
