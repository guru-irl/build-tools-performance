import React from 'react';
const LABEL_20768 = 'component_20768';
export function Component20768({ value = 20768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20768, 'data-value': derived.doubled }, children);
}
export default Component20768;
