import React from 'react';
const LABEL_25538 = 'component_25538';
export function Component25538({ value = 25538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25538, 'data-value': derived.doubled }, children);
}
export default Component25538;
