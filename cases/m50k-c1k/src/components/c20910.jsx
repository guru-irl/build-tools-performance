import React from 'react';
const LABEL_20910 = 'component_20910';
export function Component20910({ value = 20910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20910, 'data-value': derived.doubled }, children);
}
export default Component20910;
