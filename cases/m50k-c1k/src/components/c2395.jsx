import React from 'react';
const LABEL_2395 = 'component_2395';
export function Component2395({ value = 2395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2395, 'data-value': derived.doubled }, children);
}
export default Component2395;
