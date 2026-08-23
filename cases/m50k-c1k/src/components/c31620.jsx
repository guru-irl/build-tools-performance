import React from 'react';
const LABEL_31620 = 'component_31620';
export function Component31620({ value = 31620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31620, 'data-value': derived.doubled }, children);
}
export default Component31620;
