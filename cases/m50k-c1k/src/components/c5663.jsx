import React from 'react';
const LABEL_5663 = 'component_5663';
export function Component5663({ value = 5663, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5663, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5663, 'data-value': derived.doubled }, children);
}
export default Component5663;
