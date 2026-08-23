import React from 'react';
const LABEL_28322 = 'component_28322';
export function Component28322({ value = 28322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28322, 'data-value': derived.doubled }, children);
}
export default Component28322;
