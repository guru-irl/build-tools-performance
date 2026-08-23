import React from 'react';
const LABEL_19461 = 'component_19461';
export function Component19461({ value = 19461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19461, 'data-value': derived.doubled }, children);
}
export default Component19461;
