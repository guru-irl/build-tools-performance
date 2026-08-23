import React from 'react';
const LABEL_12523 = 'component_12523';
export function Component12523({ value = 12523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12523, 'data-value': derived.doubled }, children);
}
export default Component12523;
