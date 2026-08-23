import React from 'react';
const LABEL_24903 = 'component_24903';
export function Component24903({ value = 24903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24903, 'data-value': derived.doubled }, children);
}
export default Component24903;
