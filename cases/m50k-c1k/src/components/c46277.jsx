import React from 'react';
const LABEL_46277 = 'component_46277';
export function Component46277({ value = 46277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46277, 'data-value': derived.doubled }, children);
}
export default Component46277;
