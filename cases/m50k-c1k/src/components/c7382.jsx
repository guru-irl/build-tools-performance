import React from 'react';
const LABEL_7382 = 'component_7382';
export function Component7382({ value = 7382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7382, 'data-value': derived.doubled }, children);
}
export default Component7382;
