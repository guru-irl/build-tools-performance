import React from 'react';
const LABEL_16653 = 'component_16653';
export function Component16653({ value = 16653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16653, 'data-value': derived.doubled }, children);
}
export default Component16653;
