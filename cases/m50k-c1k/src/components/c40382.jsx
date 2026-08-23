import React from 'react';
const LABEL_40382 = 'component_40382';
export function Component40382({ value = 40382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40382, 'data-value': derived.doubled }, children);
}
export default Component40382;
