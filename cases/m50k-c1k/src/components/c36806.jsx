import React from 'react';
const LABEL_36806 = 'component_36806';
export function Component36806({ value = 36806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36806, 'data-value': derived.doubled }, children);
}
export default Component36806;
