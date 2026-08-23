import React from 'react';
const LABEL_1620 = 'component_1620';
export function Component1620({ value = 1620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1620, 'data-value': derived.doubled }, children);
}
export default Component1620;
