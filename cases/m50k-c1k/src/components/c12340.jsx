import React from 'react';
const LABEL_12340 = 'component_12340';
export function Component12340({ value = 12340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12340, 'data-value': derived.doubled }, children);
}
export default Component12340;
