import React from 'react';
const LABEL_27692 = 'component_27692';
export function Component27692({ value = 27692, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27692, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27692, 'data-value': derived.doubled }, children);
}
export default Component27692;
