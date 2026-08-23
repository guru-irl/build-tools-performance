import React from 'react';
const LABEL_20498 = 'component_20498';
export function Component20498({ value = 20498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20498, 'data-value': derived.doubled }, children);
}
export default Component20498;
