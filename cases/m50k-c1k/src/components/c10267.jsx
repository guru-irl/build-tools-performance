import React from 'react';
const LABEL_10267 = 'component_10267';
export function Component10267({ value = 10267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10267, 'data-value': derived.doubled }, children);
}
export default Component10267;
