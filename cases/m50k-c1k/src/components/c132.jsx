import React from 'react';
const LABEL_132 = 'component_132';
export function Component132({ value = 132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_132, 'data-value': derived.doubled }, children);
}
export default Component132;
