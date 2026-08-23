import React from 'react';
const LABEL_25088 = 'component_25088';
export function Component25088({ value = 25088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25088, 'data-value': derived.doubled }, children);
}
export default Component25088;
