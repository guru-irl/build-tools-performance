import React from 'react';
const LABEL_8984 = 'component_8984';
export function Component8984({ value = 8984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8984, 'data-value': derived.doubled }, children);
}
export default Component8984;
