import React from 'react';
const LABEL_2956 = 'component_2956';
export function Component2956({ value = 2956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2956, 'data-value': derived.doubled }, children);
}
export default Component2956;
