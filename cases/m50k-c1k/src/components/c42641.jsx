import React from 'react';
const LABEL_42641 = 'component_42641';
export function Component42641({ value = 42641, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42641, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42641, 'data-value': derived.doubled }, children);
}
export default Component42641;
