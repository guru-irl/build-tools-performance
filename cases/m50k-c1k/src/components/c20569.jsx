import React from 'react';
const LABEL_20569 = 'component_20569';
export function Component20569({ value = 20569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20569, 'data-value': derived.doubled }, children);
}
export default Component20569;
