import React from 'react';
const LABEL_24192 = 'component_24192';
export function Component24192({ value = 24192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24192, 'data-value': derived.doubled }, children);
}
export default Component24192;
