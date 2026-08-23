import React from 'react';
const LABEL_37326 = 'component_37326';
export function Component37326({ value = 37326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37326, 'data-value': derived.doubled }, children);
}
export default Component37326;
