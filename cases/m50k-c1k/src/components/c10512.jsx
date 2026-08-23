import React from 'react';
const LABEL_10512 = 'component_10512';
export function Component10512({ value = 10512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10512, 'data-value': derived.doubled }, children);
}
export default Component10512;
