import React from 'react';
const LABEL_18491 = 'component_18491';
export function Component18491({ value = 18491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18491, 'data-value': derived.doubled }, children);
}
export default Component18491;
