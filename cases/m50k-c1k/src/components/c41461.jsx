import React from 'react';
const LABEL_41461 = 'component_41461';
export function Component41461({ value = 41461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41461, 'data-value': derived.doubled }, children);
}
export default Component41461;
