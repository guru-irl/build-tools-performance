import React from 'react';
const LABEL_5308 = 'component_5308';
export function Component5308({ value = 5308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5308, 'data-value': derived.doubled }, children);
}
export default Component5308;
