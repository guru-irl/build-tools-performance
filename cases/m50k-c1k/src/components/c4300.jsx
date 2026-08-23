import React from 'react';
const LABEL_4300 = 'component_4300';
export function Component4300({ value = 4300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4300, 'data-value': derived.doubled }, children);
}
export default Component4300;
