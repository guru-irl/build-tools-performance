import React from 'react';
const LABEL_1984 = 'component_1984';
export function Component1984({ value = 1984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1984, 'data-value': derived.doubled }, children);
}
export default Component1984;
