import React from 'react';
const LABEL_20538 = 'component_20538';
export function Component20538({ value = 20538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20538, 'data-value': derived.doubled }, children);
}
export default Component20538;
