import React from 'react';
const LABEL_26806 = 'component_26806';
export function Component26806({ value = 26806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26806, 'data-value': derived.doubled }, children);
}
export default Component26806;
