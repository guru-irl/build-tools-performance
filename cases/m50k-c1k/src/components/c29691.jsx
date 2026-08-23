import React from 'react';
const LABEL_29691 = 'component_29691';
export function Component29691({ value = 29691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29691, 'data-value': derived.doubled }, children);
}
export default Component29691;
