import React from 'react';
const LABEL_10401 = 'component_10401';
export function Component10401({ value = 10401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10401, 'data-value': derived.doubled }, children);
}
export default Component10401;
