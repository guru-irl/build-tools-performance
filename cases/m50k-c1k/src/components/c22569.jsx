import React from 'react';
const LABEL_22569 = 'component_22569';
export function Component22569({ value = 22569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22569, 'data-value': derived.doubled }, children);
}
export default Component22569;
