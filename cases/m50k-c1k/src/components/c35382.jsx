import React from 'react';
const LABEL_35382 = 'component_35382';
export function Component35382({ value = 35382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35382, 'data-value': derived.doubled }, children);
}
export default Component35382;
