import React from 'react';
const LABEL_122 = 'component_122';
export function Component122({ value = 122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_122, 'data-value': derived.doubled }, children);
}
export default Component122;
