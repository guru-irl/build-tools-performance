import React from 'react';
const LABEL_27697 = 'component_27697';
export function Component27697({ value = 27697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27697, 'data-value': derived.doubled }, children);
}
export default Component27697;
