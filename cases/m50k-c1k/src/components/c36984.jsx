import React from 'react';
const LABEL_36984 = 'component_36984';
export function Component36984({ value = 36984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36984, 'data-value': derived.doubled }, children);
}
export default Component36984;
