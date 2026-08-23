import React from 'react';
const LABEL_1882 = 'component_1882';
export function Component1882({ value = 1882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1882, 'data-value': derived.doubled }, children);
}
export default Component1882;
