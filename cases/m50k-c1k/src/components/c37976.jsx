import React from 'react';
const LABEL_37976 = 'component_37976';
export function Component37976({ value = 37976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37976, 'data-value': derived.doubled }, children);
}
export default Component37976;
