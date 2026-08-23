import React from 'react';
const LABEL_2603 = 'component_2603';
export function Component2603({ value = 2603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2603, 'data-value': derived.doubled }, children);
}
export default Component2603;
