import React from 'react';
const LABEL_28267 = 'component_28267';
export function Component28267({ value = 28267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28267, 'data-value': derived.doubled }, children);
}
export default Component28267;
