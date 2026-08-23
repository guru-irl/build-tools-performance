import React from 'react';
const LABEL_42550 = 'component_42550';
export function Component42550({ value = 42550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42550, 'data-value': derived.doubled }, children);
}
export default Component42550;
