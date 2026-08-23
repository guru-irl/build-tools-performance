import React from 'react';
const LABEL_24058 = 'component_24058';
export function Component24058({ value = 24058, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24058, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24058, 'data-value': derived.doubled }, children);
}
export default Component24058;
