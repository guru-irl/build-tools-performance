import React from 'react';
const LABEL_46389 = 'component_46389';
export function Component46389({ value = 46389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46389, 'data-value': derived.doubled }, children);
}
export default Component46389;
