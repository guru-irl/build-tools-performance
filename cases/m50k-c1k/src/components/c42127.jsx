import React from 'react';
const LABEL_42127 = 'component_42127';
export function Component42127({ value = 42127, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42127, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42127, 'data-value': derived.doubled }, children);
}
export default Component42127;
