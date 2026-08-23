import React from 'react';
const LABEL_18800 = 'component_18800';
export function Component18800({ value = 18800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18800, 'data-value': derived.doubled }, children);
}
export default Component18800;
