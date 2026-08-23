import React from 'react';
const LABEL_24258 = 'component_24258';
export function Component24258({ value = 24258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24258, 'data-value': derived.doubled }, children);
}
export default Component24258;
