import React from 'react';
const LABEL_13984 = 'component_13984';
export function Component13984({ value = 13984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13984, 'data-value': derived.doubled }, children);
}
export default Component13984;
