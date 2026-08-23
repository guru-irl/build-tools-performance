import React from 'react';
const LABEL_27581 = 'component_27581';
export function Component27581({ value = 27581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27581, 'data-value': derived.doubled }, children);
}
export default Component27581;
