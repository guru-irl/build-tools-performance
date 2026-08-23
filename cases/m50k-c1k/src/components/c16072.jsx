import React from 'react';
const LABEL_16072 = 'component_16072';
export function Component16072({ value = 16072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16072, 'data-value': derived.doubled }, children);
}
export default Component16072;
