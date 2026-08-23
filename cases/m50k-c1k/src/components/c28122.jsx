import React from 'react';
const LABEL_28122 = 'component_28122';
export function Component28122({ value = 28122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28122, 'data-value': derived.doubled }, children);
}
export default Component28122;
