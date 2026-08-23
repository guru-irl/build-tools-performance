import React from 'react';
const LABEL_3935 = 'component_3935';
export function Component3935({ value = 3935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3935, 'data-value': derived.doubled }, children);
}
export default Component3935;
