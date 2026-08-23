import React from 'react';
const LABEL_27107 = 'component_27107';
export function Component27107({ value = 27107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27107, 'data-value': derived.doubled }, children);
}
export default Component27107;
