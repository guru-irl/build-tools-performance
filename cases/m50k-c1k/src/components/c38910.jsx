import React from 'react';
const LABEL_38910 = 'component_38910';
export function Component38910({ value = 38910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38910, 'data-value': derived.doubled }, children);
}
export default Component38910;
