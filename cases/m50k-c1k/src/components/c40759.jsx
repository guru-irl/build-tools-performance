import React from 'react';
const LABEL_40759 = 'component_40759';
export function Component40759({ value = 40759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40759, 'data-value': derived.doubled }, children);
}
export default Component40759;
