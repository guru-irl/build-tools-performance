import React from 'react';
const LABEL_10569 = 'component_10569';
export function Component10569({ value = 10569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10569, 'data-value': derived.doubled }, children);
}
export default Component10569;
