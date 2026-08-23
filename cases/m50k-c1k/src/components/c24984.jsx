import React from 'react';
const LABEL_24984 = 'component_24984';
export function Component24984({ value = 24984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24984, 'data-value': derived.doubled }, children);
}
export default Component24984;
