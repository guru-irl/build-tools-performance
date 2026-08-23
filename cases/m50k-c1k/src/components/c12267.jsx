import React from 'react';
const LABEL_12267 = 'component_12267';
export function Component12267({ value = 12267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12267, 'data-value': derived.doubled }, children);
}
export default Component12267;
