import React from 'react';
const LABEL_5791 = 'component_5791';
export function Component5791({ value = 5791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5791, 'data-value': derived.doubled }, children);
}
export default Component5791;
