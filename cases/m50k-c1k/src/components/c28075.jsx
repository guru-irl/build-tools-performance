import React from 'react';
const LABEL_28075 = 'component_28075';
export function Component28075({ value = 28075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28075, 'data-value': derived.doubled }, children);
}
export default Component28075;
