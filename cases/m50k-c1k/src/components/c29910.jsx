import React from 'react';
const LABEL_29910 = 'component_29910';
export function Component29910({ value = 29910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29910, 'data-value': derived.doubled }, children);
}
export default Component29910;
