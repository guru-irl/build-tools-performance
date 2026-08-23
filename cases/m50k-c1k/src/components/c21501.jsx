import React from 'react';
const LABEL_21501 = 'component_21501';
export function Component21501({ value = 21501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21501, 'data-value': derived.doubled }, children);
}
export default Component21501;
