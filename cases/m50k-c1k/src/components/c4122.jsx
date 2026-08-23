import React from 'react';
const LABEL_4122 = 'component_4122';
export function Component4122({ value = 4122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4122, 'data-value': derived.doubled }, children);
}
export default Component4122;
