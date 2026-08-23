import React from 'react';
const LABEL_13576 = 'component_13576';
export function Component13576({ value = 13576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13576, 'data-value': derived.doubled }, children);
}
export default Component13576;
