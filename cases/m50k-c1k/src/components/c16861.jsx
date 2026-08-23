import React from 'react';
const LABEL_16861 = 'component_16861';
export function Component16861({ value = 16861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16861, 'data-value': derived.doubled }, children);
}
export default Component16861;
