import React from 'react';
const LABEL_32946 = 'component_32946';
export function Component32946({ value = 32946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32946, 'data-value': derived.doubled }, children);
}
export default Component32946;
