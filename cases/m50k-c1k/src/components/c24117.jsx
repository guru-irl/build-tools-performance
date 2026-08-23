import React from 'react';
const LABEL_24117 = 'component_24117';
export function Component24117({ value = 24117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24117, 'data-value': derived.doubled }, children);
}
export default Component24117;
