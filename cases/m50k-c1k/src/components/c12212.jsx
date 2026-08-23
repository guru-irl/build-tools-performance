import React from 'react';
const LABEL_12212 = 'component_12212';
export function Component12212({ value = 12212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12212, 'data-value': derived.doubled }, children);
}
export default Component12212;
