import React from 'react';
const LABEL_3538 = 'component_3538';
export function Component3538({ value = 3538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3538, 'data-value': derived.doubled }, children);
}
export default Component3538;
