import React from 'react';
const LABEL_27311 = 'component_27311';
export function Component27311({ value = 27311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27311, 'data-value': derived.doubled }, children);
}
export default Component27311;
