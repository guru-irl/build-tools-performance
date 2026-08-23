import React from 'react';
const LABEL_18910 = 'component_18910';
export function Component18910({ value = 18910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18910, 'data-value': derived.doubled }, children);
}
export default Component18910;
