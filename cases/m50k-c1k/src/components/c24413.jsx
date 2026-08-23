import React from 'react';
const LABEL_24413 = 'component_24413';
export function Component24413({ value = 24413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24413, 'data-value': derived.doubled }, children);
}
export default Component24413;
