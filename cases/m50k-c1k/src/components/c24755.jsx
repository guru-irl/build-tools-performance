import React from 'react';
const LABEL_24755 = 'component_24755';
export function Component24755({ value = 24755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24755, 'data-value': derived.doubled }, children);
}
export default Component24755;
