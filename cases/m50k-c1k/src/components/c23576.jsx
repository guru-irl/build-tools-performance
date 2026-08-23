import React from 'react';
const LABEL_23576 = 'component_23576';
export function Component23576({ value = 23576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23576, 'data-value': derived.doubled }, children);
}
export default Component23576;
