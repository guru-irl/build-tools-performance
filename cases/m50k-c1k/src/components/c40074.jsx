import React from 'react';
const LABEL_40074 = 'component_40074';
export function Component40074({ value = 40074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40074, 'data-value': derived.doubled }, children);
}
export default Component40074;
