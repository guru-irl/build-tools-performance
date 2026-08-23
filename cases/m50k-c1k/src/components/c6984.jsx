import React from 'react';
const LABEL_6984 = 'component_6984';
export function Component6984({ value = 6984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6984, 'data-value': derived.doubled }, children);
}
export default Component6984;
