import React from 'react';
const LABEL_42512 = 'component_42512';
export function Component42512({ value = 42512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42512, 'data-value': derived.doubled }, children);
}
export default Component42512;
