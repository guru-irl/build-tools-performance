import React from 'react';
const LABEL_13538 = 'component_13538';
export function Component13538({ value = 13538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13538, 'data-value': derived.doubled }, children);
}
export default Component13538;
