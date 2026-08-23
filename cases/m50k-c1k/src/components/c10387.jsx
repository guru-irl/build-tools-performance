import React from 'react';
const LABEL_10387 = 'component_10387';
export function Component10387({ value = 10387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10387, 'data-value': derived.doubled }, children);
}
export default Component10387;
