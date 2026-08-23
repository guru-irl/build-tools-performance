import React from 'react';
const LABEL_26738 = 'component_26738';
export function Component26738({ value = 26738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26738, 'data-value': derived.doubled }, children);
}
export default Component26738;
