import React from 'react';
const LABEL_24856 = 'component_24856';
export function Component24856({ value = 24856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24856, 'data-value': derived.doubled }, children);
}
export default Component24856;
