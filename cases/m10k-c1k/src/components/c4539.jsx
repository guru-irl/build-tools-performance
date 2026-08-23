import React from 'react';
const LABEL_4539 = 'component_4539';
export function Component4539({ value = 4539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4539, 'data-value': derived.doubled }, children);
}
export default Component4539;
