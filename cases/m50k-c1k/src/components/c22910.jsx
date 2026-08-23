import React from 'react';
const LABEL_22910 = 'component_22910';
export function Component22910({ value = 22910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22910, 'data-value': derived.doubled }, children);
}
export default Component22910;
