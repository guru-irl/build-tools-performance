import React from 'react';
const LABEL_15730 = 'component_15730';
export function Component15730({ value = 15730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15730, 'data-value': derived.doubled }, children);
}
export default Component15730;
