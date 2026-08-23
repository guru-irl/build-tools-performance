import React from 'react';
const LABEL_10824 = 'component_10824';
export function Component10824({ value = 10824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10824, 'data-value': derived.doubled }, children);
}
export default Component10824;
