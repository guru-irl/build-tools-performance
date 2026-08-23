import React from 'react';
const LABEL_24576 = 'component_24576';
export function Component24576({ value = 24576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24576, 'data-value': derived.doubled }, children);
}
export default Component24576;
