import React from 'react';
const LABEL_37211 = 'component_37211';
export function Component37211({ value = 37211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37211, 'data-value': derived.doubled }, children);
}
export default Component37211;
