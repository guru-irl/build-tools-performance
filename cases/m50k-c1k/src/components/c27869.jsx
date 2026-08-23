import React from 'react';
const LABEL_27869 = 'component_27869';
export function Component27869({ value = 27869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27869, 'data-value': derived.doubled }, children);
}
export default Component27869;
