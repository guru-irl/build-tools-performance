import React from 'react';
const LABEL_15955 = 'component_15955';
export function Component15955({ value = 15955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15955, 'data-value': derived.doubled }, children);
}
export default Component15955;
