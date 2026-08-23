import React from 'react';
const LABEL_2577 = 'component_2577';
export function Component2577({ value = 2577, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2577, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2577, 'data-value': derived.doubled }, children);
}
export default Component2577;
