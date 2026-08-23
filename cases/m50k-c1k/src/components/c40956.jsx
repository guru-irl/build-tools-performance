import React from 'react';
const LABEL_40956 = 'component_40956';
export function Component40956({ value = 40956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40956, 'data-value': derived.doubled }, children);
}
export default Component40956;
