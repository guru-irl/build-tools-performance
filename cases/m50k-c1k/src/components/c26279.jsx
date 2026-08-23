import React from 'react';
const LABEL_26279 = 'component_26279';
export function Component26279({ value = 26279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26279, 'data-value': derived.doubled }, children);
}
export default Component26279;
