import React from 'react';
const LABEL_1538 = 'component_1538';
export function Component1538({ value = 1538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1538, 'data-value': derived.doubled }, children);
}
export default Component1538;
