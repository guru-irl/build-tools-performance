import React from 'react';
const LABEL_15072 = 'component_15072';
export function Component15072({ value = 15072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15072, 'data-value': derived.doubled }, children);
}
export default Component15072;
