import React from 'react';
const LABEL_23027 = 'component_23027';
export function Component23027({ value = 23027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23027, 'data-value': derived.doubled }, children);
}
export default Component23027;
