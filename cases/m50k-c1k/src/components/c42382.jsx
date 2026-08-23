import React from 'react';
const LABEL_42382 = 'component_42382';
export function Component42382({ value = 42382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42382, 'data-value': derived.doubled }, children);
}
export default Component42382;
