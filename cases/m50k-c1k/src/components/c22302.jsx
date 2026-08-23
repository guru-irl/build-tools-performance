import React from 'react';
const LABEL_22302 = 'component_22302';
export function Component22302({ value = 22302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22302, 'data-value': derived.doubled }, children);
}
export default Component22302;
