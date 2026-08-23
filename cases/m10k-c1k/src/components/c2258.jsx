import React from 'react';
const LABEL_2258 = 'component_2258';
export function Component2258({ value = 2258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2258, 'data-value': derived.doubled }, children);
}
export default Component2258;
