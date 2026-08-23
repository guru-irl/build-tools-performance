import React from 'react';
const LABEL_6806 = 'component_6806';
export function Component6806({ value = 6806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6806, 'data-value': derived.doubled }, children);
}
export default Component6806;
