import React from 'react';
const LABEL_2353 = 'component_2353';
export function Component2353({ value = 2353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2353, 'data-value': derived.doubled }, children);
}
export default Component2353;
