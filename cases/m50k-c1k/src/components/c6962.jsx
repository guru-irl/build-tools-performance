import React from 'react';
const LABEL_6962 = 'component_6962';
export function Component6962({ value = 6962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6962, 'data-value': derived.doubled }, children);
}
export default Component6962;
