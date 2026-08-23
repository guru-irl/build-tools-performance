import React from 'react';
const LABEL_39512 = 'component_39512';
export function Component39512({ value = 39512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39512, 'data-value': derived.doubled }, children);
}
export default Component39512;
