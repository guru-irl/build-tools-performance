import React from 'react';
const LABEL_20523 = 'component_20523';
export function Component20523({ value = 20523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20523, 'data-value': derived.doubled }, children);
}
export default Component20523;
