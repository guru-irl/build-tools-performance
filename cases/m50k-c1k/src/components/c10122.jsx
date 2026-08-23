import React from 'react';
const LABEL_10122 = 'component_10122';
export function Component10122({ value = 10122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10122, 'data-value': derived.doubled }, children);
}
export default Component10122;
