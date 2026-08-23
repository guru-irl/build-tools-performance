import React from 'react';
const LABEL_21258 = 'component_21258';
export function Component21258({ value = 21258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21258, 'data-value': derived.doubled }, children);
}
export default Component21258;
