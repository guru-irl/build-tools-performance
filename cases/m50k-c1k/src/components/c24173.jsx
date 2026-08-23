import React from 'react';
const LABEL_24173 = 'component_24173';
export function Component24173({ value = 24173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24173, 'data-value': derived.doubled }, children);
}
export default Component24173;
