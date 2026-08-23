import React from 'react';
const LABEL_39946 = 'component_39946';
export function Component39946({ value = 39946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39946, 'data-value': derived.doubled }, children);
}
export default Component39946;
