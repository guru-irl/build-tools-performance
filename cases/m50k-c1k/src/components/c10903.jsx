import React from 'react';
const LABEL_10903 = 'component_10903';
export function Component10903({ value = 10903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10903, 'data-value': derived.doubled }, children);
}
export default Component10903;
