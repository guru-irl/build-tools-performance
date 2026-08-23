import React from 'react';
const LABEL_24478 = 'component_24478';
export function Component24478({ value = 24478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24478, 'data-value': derived.doubled }, children);
}
export default Component24478;
