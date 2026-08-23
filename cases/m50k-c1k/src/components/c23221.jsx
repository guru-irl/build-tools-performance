import React from 'react';
const LABEL_23221 = 'component_23221';
export function Component23221({ value = 23221, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23221, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23221, 'data-value': derived.doubled }, children);
}
export default Component23221;
