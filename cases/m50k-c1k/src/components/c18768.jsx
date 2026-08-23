import React from 'react';
const LABEL_18768 = 'component_18768';
export function Component18768({ value = 18768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18768, 'data-value': derived.doubled }, children);
}
export default Component18768;
