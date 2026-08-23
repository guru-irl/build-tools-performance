import React from 'react';
const LABEL_22030 = 'component_22030';
export function Component22030({ value = 22030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22030, 'data-value': derived.doubled }, children);
}
export default Component22030;
