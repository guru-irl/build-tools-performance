import React from 'react';
const LABEL_30575 = 'component_30575';
export function Component30575({ value = 30575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30575, 'data-value': derived.doubled }, children);
}
export default Component30575;
