import React from 'react';
const LABEL_43845 = 'component_43845';
export function Component43845({ value = 43845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43845, 'data-value': derived.doubled }, children);
}
export default Component43845;
