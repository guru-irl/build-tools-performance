import React from 'react';
const LABEL_24122 = 'component_24122';
export function Component24122({ value = 24122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24122, 'data-value': derived.doubled }, children);
}
export default Component24122;
