import React from 'react';
const LABEL_21521 = 'component_21521';
export function Component21521({ value = 21521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21521, 'data-value': derived.doubled }, children);
}
export default Component21521;
