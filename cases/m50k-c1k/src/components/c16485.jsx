import React from 'react';
const LABEL_16485 = 'component_16485';
export function Component16485({ value = 16485, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16485, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16485, 'data-value': derived.doubled }, children);
}
export default Component16485;
