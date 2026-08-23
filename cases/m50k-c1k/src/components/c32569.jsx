import React from 'react';
const LABEL_32569 = 'component_32569';
export function Component32569({ value = 32569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32569, 'data-value': derived.doubled }, children);
}
export default Component32569;
