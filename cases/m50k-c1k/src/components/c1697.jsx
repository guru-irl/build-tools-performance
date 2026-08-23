import React from 'react';
const LABEL_1697 = 'component_1697';
export function Component1697({ value = 1697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1697, 'data-value': derived.doubled }, children);
}
export default Component1697;
