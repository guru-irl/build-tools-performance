import React from 'react';
const LABEL_8512 = 'component_8512';
export function Component8512({ value = 8512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8512, 'data-value': derived.doubled }, children);
}
export default Component8512;
