import React from 'react';
const LABEL_9378 = 'component_9378';
export function Component9378({ value = 9378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9378, 'data-value': derived.doubled }, children);
}
export default Component9378;
