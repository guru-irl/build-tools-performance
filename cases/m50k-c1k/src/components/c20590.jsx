import React from 'react';
const LABEL_20590 = 'component_20590';
export function Component20590({ value = 20590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20590, 'data-value': derived.doubled }, children);
}
export default Component20590;
