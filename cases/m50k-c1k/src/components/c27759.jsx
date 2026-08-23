import React from 'react';
const LABEL_27759 = 'component_27759';
export function Component27759({ value = 27759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27759, 'data-value': derived.doubled }, children);
}
export default Component27759;
