import React from 'react';
const LABEL_5500 = 'component_5500';
export function Component5500({ value = 5500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5500, 'data-value': derived.doubled }, children);
}
export default Component5500;
