import React from 'react';
const LABEL_8576 = 'component_8576';
export function Component8576({ value = 8576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8576, 'data-value': derived.doubled }, children);
}
export default Component8576;
