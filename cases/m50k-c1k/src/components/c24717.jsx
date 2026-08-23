import React from 'react';
const LABEL_24717 = 'component_24717';
export function Component24717({ value = 24717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24717, 'data-value': derived.doubled }, children);
}
export default Component24717;
