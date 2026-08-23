import React from 'react';
const LABEL_38122 = 'component_38122';
export function Component38122({ value = 38122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38122, 'data-value': derived.doubled }, children);
}
export default Component38122;
