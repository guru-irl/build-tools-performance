import React from 'react';
const LABEL_38576 = 'component_38576';
export function Component38576({ value = 38576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38576, 'data-value': derived.doubled }, children);
}
export default Component38576;
