import React from 'react';
const LABEL_36382 = 'component_36382';
export function Component36382({ value = 36382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36382, 'data-value': derived.doubled }, children);
}
export default Component36382;
