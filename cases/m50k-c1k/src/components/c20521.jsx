import React from 'react';
const LABEL_20521 = 'component_20521';
export function Component20521({ value = 20521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20521, 'data-value': derived.doubled }, children);
}
export default Component20521;
