import React from 'react';
const LABEL_39576 = 'component_39576';
export function Component39576({ value = 39576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39576, 'data-value': derived.doubled }, children);
}
export default Component39576;
