import React from 'react';
const LABEL_16538 = 'component_16538';
export function Component16538({ value = 16538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16538, 'data-value': derived.doubled }, children);
}
export default Component16538;
