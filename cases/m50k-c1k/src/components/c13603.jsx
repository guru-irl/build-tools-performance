import React from 'react';
const LABEL_13603 = 'component_13603';
export function Component13603({ value = 13603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13603, 'data-value': derived.doubled }, children);
}
export default Component13603;
