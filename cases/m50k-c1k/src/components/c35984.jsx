import React from 'react';
const LABEL_35984 = 'component_35984';
export function Component35984({ value = 35984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35984, 'data-value': derived.doubled }, children);
}
export default Component35984;
