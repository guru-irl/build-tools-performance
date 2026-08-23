import React from 'react';
const LABEL_4512 = 'component_4512';
export function Component4512({ value = 4512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4512, 'data-value': derived.doubled }, children);
}
export default Component4512;
