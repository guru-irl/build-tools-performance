import React from 'react';
const LABEL_8523 = 'component_8523';
export function Component8523({ value = 8523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8523, 'data-value': derived.doubled }, children);
}
export default Component8523;
