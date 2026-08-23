import React from 'react';
const LABEL_28569 = 'component_28569';
export function Component28569({ value = 28569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28569, 'data-value': derived.doubled }, children);
}
export default Component28569;
