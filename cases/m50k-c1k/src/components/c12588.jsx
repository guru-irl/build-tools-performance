import React from 'react';
const LABEL_12588 = 'component_12588';
export function Component12588({ value = 12588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12588, 'data-value': derived.doubled }, children);
}
export default Component12588;
