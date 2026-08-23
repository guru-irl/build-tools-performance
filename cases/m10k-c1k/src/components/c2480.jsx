import React from 'react';
const LABEL_2480 = 'component_2480';
export function Component2480({ value = 2480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2480, 'data-value': derived.doubled }, children);
}
export default Component2480;
