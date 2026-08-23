import React from 'react';
const LABEL_1576 = 'component_1576';
export function Component1576({ value = 1576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1576, 'data-value': derived.doubled }, children);
}
export default Component1576;
