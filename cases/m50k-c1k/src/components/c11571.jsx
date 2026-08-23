import React from 'react';
const LABEL_11571 = 'component_11571';
export function Component11571({ value = 11571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11571, 'data-value': derived.doubled }, children);
}
export default Component11571;
