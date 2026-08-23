import React from 'react';
const LABEL_11576 = 'component_11576';
export function Component11576({ value = 11576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11576, 'data-value': derived.doubled }, children);
}
export default Component11576;
