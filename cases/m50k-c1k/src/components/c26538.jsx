import React from 'react';
const LABEL_26538 = 'component_26538';
export function Component26538({ value = 26538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26538, 'data-value': derived.doubled }, children);
}
export default Component26538;
