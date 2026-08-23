import React from 'react';
const LABEL_27138 = 'component_27138';
export function Component27138({ value = 27138, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27138, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27138, 'data-value': derived.doubled }, children);
}
export default Component27138;
