import React from 'react';
const LABEL_32482 = 'component_32482';
export function Component32482({ value = 32482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32482, 'data-value': derived.doubled }, children);
}
export default Component32482;
