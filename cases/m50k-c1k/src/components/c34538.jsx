import React from 'react';
const LABEL_34538 = 'component_34538';
export function Component34538({ value = 34538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34538, 'data-value': derived.doubled }, children);
}
export default Component34538;
