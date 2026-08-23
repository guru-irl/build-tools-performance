import React from 'react';
const LABEL_30798 = 'component_30798';
export function Component30798({ value = 30798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30798, 'data-value': derived.doubled }, children);
}
export default Component30798;
