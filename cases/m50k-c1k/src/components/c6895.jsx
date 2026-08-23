import React from 'react';
const LABEL_6895 = 'component_6895';
export function Component6895({ value = 6895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6895, 'data-value': derived.doubled }, children);
}
export default Component6895;
