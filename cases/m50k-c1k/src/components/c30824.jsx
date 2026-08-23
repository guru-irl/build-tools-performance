import React from 'react';
const LABEL_30824 = 'component_30824';
export function Component30824({ value = 30824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30824, 'data-value': derived.doubled }, children);
}
export default Component30824;
