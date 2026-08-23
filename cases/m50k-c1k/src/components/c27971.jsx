import React from 'react';
const LABEL_27971 = 'component_27971';
export function Component27971({ value = 27971, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27971, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27971, 'data-value': derived.doubled }, children);
}
export default Component27971;
