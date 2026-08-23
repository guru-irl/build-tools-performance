import React from 'react';
const LABEL_24396 = 'component_24396';
export function Component24396({ value = 24396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24396, 'data-value': derived.doubled }, children);
}
export default Component24396;
