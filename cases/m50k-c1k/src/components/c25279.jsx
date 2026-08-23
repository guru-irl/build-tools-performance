import React from 'react';
const LABEL_25279 = 'component_25279';
export function Component25279({ value = 25279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25279, 'data-value': derived.doubled }, children);
}
export default Component25279;
