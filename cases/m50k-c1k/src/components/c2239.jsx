import React from 'react';
const LABEL_2239 = 'component_2239';
export function Component2239({ value = 2239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2239, 'data-value': derived.doubled }, children);
}
export default Component2239;
