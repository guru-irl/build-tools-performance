import React from 'react';
const LABEL_28700 = 'component_28700';
export function Component28700({ value = 28700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28700, 'data-value': derived.doubled }, children);
}
export default Component28700;
