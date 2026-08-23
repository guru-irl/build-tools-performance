import React from 'react';
const LABEL_22387 = 'component_22387';
export function Component22387({ value = 22387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22387, 'data-value': derived.doubled }, children);
}
export default Component22387;
