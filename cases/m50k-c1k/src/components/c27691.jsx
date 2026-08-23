import React from 'react';
const LABEL_27691 = 'component_27691';
export function Component27691({ value = 27691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27691, 'data-value': derived.doubled }, children);
}
export default Component27691;
