import React from 'react';
const LABEL_7538 = 'component_7538';
export function Component7538({ value = 7538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7538, 'data-value': derived.doubled }, children);
}
export default Component7538;
