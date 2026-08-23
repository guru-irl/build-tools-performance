import React from 'react';
const LABEL_24349 = 'component_24349';
export function Component24349({ value = 24349, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24349, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24349, 'data-value': derived.doubled }, children);
}
export default Component24349;
