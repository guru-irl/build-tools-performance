import React from 'react';
const LABEL_14512 = 'component_14512';
export function Component14512({ value = 14512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14512, 'data-value': derived.doubled }, children);
}
export default Component14512;
