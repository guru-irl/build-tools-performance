import React from 'react';
const LABEL_27196 = 'component_27196';
export function Component27196({ value = 27196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27196, 'data-value': derived.doubled }, children);
}
export default Component27196;
