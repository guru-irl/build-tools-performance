import React from 'react';
const LABEL_40300 = 'component_40300';
export function Component40300({ value = 40300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40300, 'data-value': derived.doubled }, children);
}
export default Component40300;
