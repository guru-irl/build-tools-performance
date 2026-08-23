import React from 'react';
const LABEL_27538 = 'component_27538';
export function Component27538({ value = 27538, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27538, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27538, 'data-value': derived.doubled }, children);
}
export default Component27538;
