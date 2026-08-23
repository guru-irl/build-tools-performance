import React from 'react';
const LABEL_5845 = 'component_5845';
export function Component5845({ value = 5845, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5845, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5845, 'data-value': derived.doubled }, children);
}
export default Component5845;
