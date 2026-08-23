import React from 'react';
const LABEL_2941 = 'component_2941';
export function Component2941({ value = 2941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2941, 'data-value': derived.doubled }, children);
}
export default Component2941;
