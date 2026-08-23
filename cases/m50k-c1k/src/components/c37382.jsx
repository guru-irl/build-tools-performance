import React from 'react';
const LABEL_37382 = 'component_37382';
export function Component37382({ value = 37382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37382, 'data-value': derived.doubled }, children);
}
export default Component37382;
