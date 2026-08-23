import React from 'react';
const LABEL_10806 = 'component_10806';
export function Component10806({ value = 10806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10806, 'data-value': derived.doubled }, children);
}
export default Component10806;
