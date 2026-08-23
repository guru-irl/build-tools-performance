import React from 'react';
const LABEL_32845 = 'component_32845';
export function Component32845({ value = 32845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32845, 'data-value': derived.doubled }, children);
}
export default Component32845;
