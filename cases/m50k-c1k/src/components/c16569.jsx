import React from 'react';
const LABEL_16569 = 'component_16569';
export function Component16569({ value = 16569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16569, 'data-value': derived.doubled }, children);
}
export default Component16569;
