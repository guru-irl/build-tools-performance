import React from 'react';
const LABEL_27746 = 'component_27746';
export function Component27746({ value = 27746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27746, 'data-value': derived.doubled }, children);
}
export default Component27746;
