import React from 'react';
const LABEL_21306 = 'component_21306';
export function Component21306({ value = 21306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21306, 'data-value': derived.doubled }, children);
}
export default Component21306;
