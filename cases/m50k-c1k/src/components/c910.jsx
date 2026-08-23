import React from 'react';
const LABEL_910 = 'component_910';
export function Component910({ value = 910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_910, 'data-value': derived.doubled }, children);
}
export default Component910;
