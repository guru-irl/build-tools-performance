import React from 'react';
const LABEL_44538 = 'component_44538';
export function Component44538({ value = 44538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44538, 'data-value': derived.doubled }, children);
}
export default Component44538;
