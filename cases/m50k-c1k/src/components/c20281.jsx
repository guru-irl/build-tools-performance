import React from 'react';
const LABEL_20281 = 'component_20281';
export function Component20281({ value = 20281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20281, 'data-value': derived.doubled }, children);
}
export default Component20281;
