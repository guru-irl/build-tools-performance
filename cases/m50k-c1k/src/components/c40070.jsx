import React from 'react';
const LABEL_40070 = 'component_40070';
export function Component40070({ value = 40070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40070, 'data-value': derived.doubled }, children);
}
export default Component40070;
