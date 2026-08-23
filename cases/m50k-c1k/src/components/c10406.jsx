import React from 'react';
const LABEL_10406 = 'component_10406';
export function Component10406({ value = 10406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10406, 'data-value': derived.doubled }, children);
}
export default Component10406;
