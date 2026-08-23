import React from 'react';
const LABEL_21120 = 'component_21120';
export function Component21120({ value = 21120, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21120, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21120, 'data-value': derived.doubled }, children);
}
export default Component21120;
