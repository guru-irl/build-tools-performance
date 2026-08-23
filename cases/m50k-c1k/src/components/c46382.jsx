import React from 'react';
const LABEL_46382 = 'component_46382';
export function Component46382({ value = 46382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46382, 'data-value': derived.doubled }, children);
}
export default Component46382;
