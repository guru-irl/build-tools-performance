import React from 'react';
const LABEL_24575 = 'component_24575';
export function Component24575({ value = 24575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24575, 'data-value': derived.doubled }, children);
}
export default Component24575;
