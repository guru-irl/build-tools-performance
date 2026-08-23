import React from 'react';
const LABEL_35538 = 'component_35538';
export function Component35538({ value = 35538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35538, 'data-value': derived.doubled }, children);
}
export default Component35538;
