import React from 'react';
const LABEL_16301 = 'component_16301';
export function Component16301({ value = 16301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16301, 'data-value': derived.doubled }, children);
}
export default Component16301;
