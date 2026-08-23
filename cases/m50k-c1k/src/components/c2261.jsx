import React from 'react';
const LABEL_2261 = 'component_2261';
export function Component2261({ value = 2261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2261, 'data-value': derived.doubled }, children);
}
export default Component2261;
