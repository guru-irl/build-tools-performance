import React from 'react';
const LABEL_15903 = 'component_15903';
export function Component15903({ value = 15903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15903, 'data-value': derived.doubled }, children);
}
export default Component15903;
