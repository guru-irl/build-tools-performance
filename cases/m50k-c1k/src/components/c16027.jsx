import React from 'react';
const LABEL_16027 = 'component_16027';
export function Component16027({ value = 16027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16027, 'data-value': derived.doubled }, children);
}
export default Component16027;
