import React from 'react';
const LABEL_27473 = 'component_27473';
export function Component27473({ value = 27473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27473, 'data-value': derived.doubled }, children);
}
export default Component27473;
