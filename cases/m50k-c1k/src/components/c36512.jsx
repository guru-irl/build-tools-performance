import React from 'react';
const LABEL_36512 = 'component_36512';
export function Component36512({ value = 36512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36512, 'data-value': derived.doubled }, children);
}
export default Component36512;
