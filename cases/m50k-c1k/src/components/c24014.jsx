import React from 'react';
const LABEL_24014 = 'component_24014';
export function Component24014({ value = 24014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24014, 'data-value': derived.doubled }, children);
}
export default Component24014;
