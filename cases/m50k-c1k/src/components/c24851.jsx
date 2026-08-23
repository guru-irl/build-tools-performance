import React from 'react';
const LABEL_24851 = 'component_24851';
export function Component24851({ value = 24851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24851, 'data-value': derived.doubled }, children);
}
export default Component24851;
