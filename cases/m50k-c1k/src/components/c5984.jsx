import React from 'react';
const LABEL_5984 = 'component_5984';
export function Component5984({ value = 5984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5984, 'data-value': derived.doubled }, children);
}
export default Component5984;
