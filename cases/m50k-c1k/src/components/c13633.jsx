import React from 'react';
const LABEL_13633 = 'component_13633';
export function Component13633({ value = 13633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13633, 'data-value': derived.doubled }, children);
}
export default Component13633;
