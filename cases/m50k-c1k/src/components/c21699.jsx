import React from 'react';
const LABEL_21699 = 'component_21699';
export function Component21699({ value = 21699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21699, 'data-value': derived.doubled }, children);
}
export default Component21699;
