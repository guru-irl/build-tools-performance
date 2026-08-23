import React from 'react';
const LABEL_20864 = 'component_20864';
export function Component20864({ value = 20864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20864, 'data-value': derived.doubled }, children);
}
export default Component20864;
