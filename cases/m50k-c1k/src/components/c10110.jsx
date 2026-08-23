import React from 'react';
const LABEL_10110 = 'component_10110';
export function Component10110({ value = 10110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10110, 'data-value': derived.doubled }, children);
}
export default Component10110;
