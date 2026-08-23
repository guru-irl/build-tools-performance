import React from 'react';
const LABEL_45389 = 'component_45389';
export function Component45389({ value = 45389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45389, 'data-value': derived.doubled }, children);
}
export default Component45389;
