import React from 'react';
const LABEL_20720 = 'component_20720';
export function Component20720({ value = 20720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20720, 'data-value': derived.doubled }, children);
}
export default Component20720;
