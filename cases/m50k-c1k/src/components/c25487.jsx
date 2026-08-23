import React from 'react';
const LABEL_25487 = 'component_25487';
export function Component25487({ value = 25487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25487, 'data-value': derived.doubled }, children);
}
export default Component25487;
