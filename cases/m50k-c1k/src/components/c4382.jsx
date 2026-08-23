import React from 'react';
const LABEL_4382 = 'component_4382';
export function Component4382({ value = 4382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4382, 'data-value': derived.doubled }, children);
}
export default Component4382;
