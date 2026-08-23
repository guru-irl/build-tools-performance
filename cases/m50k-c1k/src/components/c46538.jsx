import React from 'react';
const LABEL_46538 = 'component_46538';
export function Component46538({ value = 46538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46538, 'data-value': derived.doubled }, children);
}
export default Component46538;
