import React from 'react';
const LABEL_37512 = 'component_37512';
export function Component37512({ value = 37512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37512, 'data-value': derived.doubled }, children);
}
export default Component37512;
