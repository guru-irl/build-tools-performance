import React from 'react';
const LABEL_20534 = 'component_20534';
export function Component20534({ value = 20534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20534, 'data-value': derived.doubled }, children);
}
export default Component20534;
