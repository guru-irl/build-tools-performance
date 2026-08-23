import React from 'react';
const LABEL_3806 = 'component_3806';
export function Component3806({ value = 3806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3806, 'data-value': derived.doubled }, children);
}
export default Component3806;
