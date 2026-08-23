import React from 'react';
const LABEL_20625 = 'component_20625';
export function Component20625({ value = 20625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20625, 'data-value': derived.doubled }, children);
}
export default Component20625;
