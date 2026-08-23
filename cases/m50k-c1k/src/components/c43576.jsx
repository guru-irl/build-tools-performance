import React from 'react';
const LABEL_43576 = 'component_43576';
export function Component43576({ value = 43576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43576, 'data-value': derived.doubled }, children);
}
export default Component43576;
