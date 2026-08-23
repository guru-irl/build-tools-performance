import React from 'react';
const LABEL_18302 = 'component_18302';
export function Component18302({ value = 18302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18302, 'data-value': derived.doubled }, children);
}
export default Component18302;
