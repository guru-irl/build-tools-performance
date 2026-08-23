import React from 'react';
const LABEL_5606 = 'component_5606';
export function Component5606({ value = 5606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5606, 'data-value': derived.doubled }, children);
}
export default Component5606;
