import React from 'react';
const LABEL_14569 = 'component_14569';
export function Component14569({ value = 14569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14569, 'data-value': derived.doubled }, children);
}
export default Component14569;
