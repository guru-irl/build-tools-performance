import React from 'react';
const LABEL_39125 = 'component_39125';
export function Component39125({ value = 39125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39125, 'data-value': derived.doubled }, children);
}
export default Component39125;
