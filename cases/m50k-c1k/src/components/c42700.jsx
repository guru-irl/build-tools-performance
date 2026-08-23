import React from 'react';
const LABEL_42700 = 'component_42700';
export function Component42700({ value = 42700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42700, 'data-value': derived.doubled }, children);
}
export default Component42700;
