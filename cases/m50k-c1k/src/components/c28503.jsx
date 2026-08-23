import React from 'react';
const LABEL_28503 = 'component_28503';
export function Component28503({ value = 28503, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28503, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28503, 'data-value': derived.doubled }, children);
}
export default Component28503;
