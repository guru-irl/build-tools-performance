import React from 'react';
const LABEL_20486 = 'component_20486';
export function Component20486({ value = 20486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20486, 'data-value': derived.doubled }, children);
}
export default Component20486;
