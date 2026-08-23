import React from 'react';
const LABEL_12470 = 'component_12470';
export function Component12470({ value = 12470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12470, 'data-value': derived.doubled }, children);
}
export default Component12470;
