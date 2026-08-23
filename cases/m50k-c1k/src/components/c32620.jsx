import React from 'react';
const LABEL_32620 = 'component_32620';
export function Component32620({ value = 32620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32620, 'data-value': derived.doubled }, children);
}
export default Component32620;
