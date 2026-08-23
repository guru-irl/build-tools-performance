import React from 'react';
const LABEL_18569 = 'component_18569';
export function Component18569({ value = 18569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18569, 'data-value': derived.doubled }, children);
}
export default Component18569;
