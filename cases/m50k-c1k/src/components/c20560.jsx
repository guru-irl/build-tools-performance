import React from 'react';
const LABEL_20560 = 'component_20560';
export function Component20560({ value = 20560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20560, 'data-value': derived.doubled }, children);
}
export default Component20560;
