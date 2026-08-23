import React from 'react';
const LABEL_40732 = 'component_40732';
export function Component40732({ value = 40732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40732, 'data-value': derived.doubled }, children);
}
export default Component40732;
