import React from 'react';
const LABEL_18462 = 'component_18462';
export function Component18462({ value = 18462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18462, 'data-value': derived.doubled }, children);
}
export default Component18462;
