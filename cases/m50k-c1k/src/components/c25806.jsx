import React from 'react';
const LABEL_25806 = 'component_25806';
export function Component25806({ value = 25806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25806, 'data-value': derived.doubled }, children);
}
export default Component25806;
