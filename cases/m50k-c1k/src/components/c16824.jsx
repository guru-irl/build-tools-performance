import React from 'react';
const LABEL_16824 = 'component_16824';
export function Component16824({ value = 16824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16824, 'data-value': derived.doubled }, children);
}
export default Component16824;
