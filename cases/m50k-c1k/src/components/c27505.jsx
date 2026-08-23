import React from 'react';
const LABEL_27505 = 'component_27505';
export function Component27505({ value = 27505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27505, 'data-value': derived.doubled }, children);
}
export default Component27505;
