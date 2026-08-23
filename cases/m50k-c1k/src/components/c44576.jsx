import React from 'react';
const LABEL_44576 = 'component_44576';
export function Component44576({ value = 44576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44576, 'data-value': derived.doubled }, children);
}
export default Component44576;
