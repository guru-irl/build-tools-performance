import React from 'react';
const LABEL_21569 = 'component_21569';
export function Component21569({ value = 21569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21569, 'data-value': derived.doubled }, children);
}
export default Component21569;
