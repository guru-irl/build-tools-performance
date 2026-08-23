import React from 'react';
const LABEL_24654 = 'component_24654';
export function Component24654({ value = 24654, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24654, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24654, 'data-value': derived.doubled }, children);
}
export default Component24654;
