import React from 'react';
const LABEL_31576 = 'component_31576';
export function Component31576({ value = 31576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31576, 'data-value': derived.doubled }, children);
}
export default Component31576;
