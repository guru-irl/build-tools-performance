import React from 'react';
const LABEL_22576 = 'component_22576';
export function Component22576({ value = 22576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22576, 'data-value': derived.doubled }, children);
}
export default Component22576;
