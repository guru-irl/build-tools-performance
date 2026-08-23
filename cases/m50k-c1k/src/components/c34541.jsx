import React from 'react';
const LABEL_34541 = 'component_34541';
export function Component34541({ value = 34541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34541, 'data-value': derived.doubled }, children);
}
export default Component34541;
