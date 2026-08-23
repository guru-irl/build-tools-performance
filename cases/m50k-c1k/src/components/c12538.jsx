import React from 'react';
const LABEL_12538 = 'component_12538';
export function Component12538({ value = 12538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12538, 'data-value': derived.doubled }, children);
}
export default Component12538;
