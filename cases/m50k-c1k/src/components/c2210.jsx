import React from 'react';
const LABEL_2210 = 'component_2210';
export function Component2210({ value = 2210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2210, 'data-value': derived.doubled }, children);
}
export default Component2210;
