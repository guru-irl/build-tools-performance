import React from 'react';
const LABEL_22984 = 'component_22984';
export function Component22984({ value = 22984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22984, 'data-value': derived.doubled }, children);
}
export default Component22984;
