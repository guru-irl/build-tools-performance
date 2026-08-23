import React from 'react';
const LABEL_26222 = 'component_26222';
export function Component26222({ value = 26222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26222, 'data-value': derived.doubled }, children);
}
export default Component26222;
