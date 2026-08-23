import React from 'react';
const LABEL_9305 = 'component_9305';
export function Component9305({ value = 9305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9305, 'data-value': derived.doubled }, children);
}
export default Component9305;
