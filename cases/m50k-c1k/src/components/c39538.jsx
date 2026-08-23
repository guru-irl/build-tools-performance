import React from 'react';
const LABEL_39538 = 'component_39538';
export function Component39538({ value = 39538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39538, 'data-value': derived.doubled }, children);
}
export default Component39538;
