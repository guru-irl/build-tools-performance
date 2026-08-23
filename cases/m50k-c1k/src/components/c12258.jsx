import React from 'react';
const LABEL_12258 = 'component_12258';
export function Component12258({ value = 12258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12258, 'data-value': derived.doubled }, children);
}
export default Component12258;
