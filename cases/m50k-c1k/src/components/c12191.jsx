import React from 'react';
const LABEL_12191 = 'component_12191';
export function Component12191({ value = 12191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12191, 'data-value': derived.doubled }, children);
}
export default Component12191;
