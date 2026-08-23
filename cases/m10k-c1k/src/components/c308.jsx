import React from 'react';
const LABEL_308 = 'component_308';
export function Component308({ value = 308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_308, 'data-value': derived.doubled }, children);
}
export default Component308;
