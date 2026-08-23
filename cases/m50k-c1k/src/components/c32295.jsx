import React from 'react';
const LABEL_32295 = 'component_32295';
export function Component32295({ value = 32295, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32295, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32295, 'data-value': derived.doubled }, children);
}
export default Component32295;
