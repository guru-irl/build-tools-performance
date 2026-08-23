import React from 'react';
const LABEL_23293 = 'component_23293';
export function Component23293({ value = 23293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23293, 'data-value': derived.doubled }, children);
}
export default Component23293;
