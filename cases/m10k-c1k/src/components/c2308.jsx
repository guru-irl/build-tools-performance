import React from 'react';
const LABEL_2308 = 'component_2308';
export function Component2308({ value = 2308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2308, 'data-value': derived.doubled }, children);
}
export default Component2308;
