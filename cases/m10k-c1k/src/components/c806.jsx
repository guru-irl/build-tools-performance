import React from 'react';
const LABEL_806 = 'component_806';
export function Component806({ value = 806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_806, 'data-value': derived.doubled }, children);
}
export default Component806;
