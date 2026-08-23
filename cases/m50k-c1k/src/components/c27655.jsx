import React from 'react';
const LABEL_27655 = 'component_27655';
export function Component27655({ value = 27655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27655, 'data-value': derived.doubled }, children);
}
export default Component27655;
