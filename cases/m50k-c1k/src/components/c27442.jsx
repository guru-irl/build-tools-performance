import React from 'react';
const LABEL_27442 = 'component_27442';
export function Component27442({ value = 27442, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27442, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27442, 'data-value': derived.doubled }, children);
}
export default Component27442;
