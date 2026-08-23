import React from 'react';
const LABEL_24177 = 'component_24177';
export function Component24177({ value = 24177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24177, 'data-value': derived.doubled }, children);
}
export default Component24177;
