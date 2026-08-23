import React from 'react';
const LABEL_29538 = 'component_29538';
export function Component29538({ value = 29538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29538, 'data-value': derived.doubled }, children);
}
export default Component29538;
