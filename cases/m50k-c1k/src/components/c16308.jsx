import React from 'react';
const LABEL_16308 = 'component_16308';
export function Component16308({ value = 16308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16308, 'data-value': derived.doubled }, children);
}
export default Component16308;
