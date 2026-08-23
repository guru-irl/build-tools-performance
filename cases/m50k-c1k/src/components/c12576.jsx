import React from 'react';
const LABEL_12576 = 'component_12576';
export function Component12576({ value = 12576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12576, 'data-value': derived.doubled }, children);
}
export default Component12576;
