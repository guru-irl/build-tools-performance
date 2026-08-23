import React from 'react';
const LABEL_4538 = 'component_4538';
export function Component4538({ value = 4538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4538, 'data-value': derived.doubled }, children);
}
export default Component4538;
