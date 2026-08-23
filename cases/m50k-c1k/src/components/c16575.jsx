import React from 'react';
const LABEL_16575 = 'component_16575';
export function Component16575({ value = 16575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16575, 'data-value': derived.doubled }, children);
}
export default Component16575;
