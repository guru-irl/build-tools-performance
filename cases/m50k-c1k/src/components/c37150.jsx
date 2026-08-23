import React from 'react';
const LABEL_37150 = 'component_37150';
export function Component37150({ value = 37150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37150, 'data-value': derived.doubled }, children);
}
export default Component37150;
