import React from 'react';
const LABEL_32984 = 'component_32984';
export function Component32984({ value = 32984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32984, 'data-value': derived.doubled }, children);
}
export default Component32984;
