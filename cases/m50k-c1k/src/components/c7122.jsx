import React from 'react';
const LABEL_7122 = 'component_7122';
export function Component7122({ value = 7122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7122, 'data-value': derived.doubled }, children);
}
export default Component7122;
