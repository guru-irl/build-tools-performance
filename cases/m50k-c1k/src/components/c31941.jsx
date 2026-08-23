import React from 'react';
const LABEL_31941 = 'component_31941';
export function Component31941({ value = 31941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31941, 'data-value': derived.doubled }, children);
}
export default Component31941;
