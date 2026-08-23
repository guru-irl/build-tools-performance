import React from 'react';
const LABEL_16588 = 'component_16588';
export function Component16588({ value = 16588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16588, 'data-value': derived.doubled }, children);
}
export default Component16588;
