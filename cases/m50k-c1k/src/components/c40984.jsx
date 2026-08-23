import React from 'react';
const LABEL_40984 = 'component_40984';
export function Component40984({ value = 40984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40984, 'data-value': derived.doubled }, children);
}
export default Component40984;
