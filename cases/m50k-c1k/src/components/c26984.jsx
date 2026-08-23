import React from 'react';
const LABEL_26984 = 'component_26984';
export function Component26984({ value = 26984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26984, 'data-value': derived.doubled }, children);
}
export default Component26984;
