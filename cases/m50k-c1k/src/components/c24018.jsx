import React from 'react';
const LABEL_24018 = 'component_24018';
export function Component24018({ value = 24018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24018, 'data-value': derived.doubled }, children);
}
export default Component24018;
