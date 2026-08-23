import React from 'react';
const LABEL_12102 = 'component_12102';
export function Component12102({ value = 12102, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12102, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12102, 'data-value': derived.doubled }, children);
}
export default Component12102;
