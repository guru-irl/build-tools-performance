import React from 'react';
const LABEL_13072 = 'component_13072';
export function Component13072({ value = 13072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13072, 'data-value': derived.doubled }, children);
}
export default Component13072;
