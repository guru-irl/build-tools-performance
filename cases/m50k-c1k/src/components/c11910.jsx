import React from 'react';
const LABEL_11910 = 'component_11910';
export function Component11910({ value = 11910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11910, 'data-value': derived.doubled }, children);
}
export default Component11910;
