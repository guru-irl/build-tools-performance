import React from 'react';
const LABEL_21030 = 'component_21030';
export function Component21030({ value = 21030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21030, 'data-value': derived.doubled }, children);
}
export default Component21030;
