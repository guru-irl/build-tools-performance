import React from 'react';
const LABEL_7576 = 'component_7576';
export function Component7576({ value = 7576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7576, 'data-value': derived.doubled }, children);
}
export default Component7576;
