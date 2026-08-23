import React from 'react';
const LABEL_38538 = 'component_38538';
export function Component38538({ value = 38538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38538, 'data-value': derived.doubled }, children);
}
export default Component38538;
