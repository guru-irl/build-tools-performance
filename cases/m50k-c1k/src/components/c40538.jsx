import React from 'react';
const LABEL_40538 = 'component_40538';
export function Component40538({ value = 40538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40538, 'data-value': derived.doubled }, children);
}
export default Component40538;
