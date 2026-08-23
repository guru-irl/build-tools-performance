import React from 'react';
const LABEL_7962 = 'component_7962';
export function Component7962({ value = 7962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7962, 'data-value': derived.doubled }, children);
}
export default Component7962;
