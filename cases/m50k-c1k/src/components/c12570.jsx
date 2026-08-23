import React from 'react';
const LABEL_12570 = 'component_12570';
export function Component12570({ value = 12570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12570, 'data-value': derived.doubled }, children);
}
export default Component12570;
