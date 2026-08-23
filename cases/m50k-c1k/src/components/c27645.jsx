import React from 'react';
const LABEL_27645 = 'component_27645';
export function Component27645({ value = 27645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27645, 'data-value': derived.doubled }, children);
}
export default Component27645;
