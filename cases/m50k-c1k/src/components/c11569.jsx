import React from 'react';
const LABEL_11569 = 'component_11569';
export function Component11569({ value = 11569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11569, 'data-value': derived.doubled }, children);
}
export default Component11569;
