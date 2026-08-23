import React from 'react';
const LABEL_5435 = 'component_5435';
export function Component5435({ value = 5435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5435, 'data-value': derived.doubled }, children);
}
export default Component5435;
