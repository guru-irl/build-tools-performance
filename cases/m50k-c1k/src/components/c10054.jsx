import React from 'react';
const LABEL_10054 = 'component_10054';
export function Component10054({ value = 10054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10054, 'data-value': derived.doubled }, children);
}
export default Component10054;
