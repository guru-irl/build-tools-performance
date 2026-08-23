import React from 'react';
const LABEL_14845 = 'component_14845';
export function Component14845({ value = 14845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14845, 'data-value': derived.doubled }, children);
}
export default Component14845;
