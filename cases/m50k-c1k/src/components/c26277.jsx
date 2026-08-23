import React from 'react';
const LABEL_26277 = 'component_26277';
export function Component26277({ value = 26277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26277, 'data-value': derived.doubled }, children);
}
export default Component26277;
