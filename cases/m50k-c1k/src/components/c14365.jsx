import React from 'react';
const LABEL_14365 = 'component_14365';
export function Component14365({ value = 14365, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14365, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14365, 'data-value': derived.doubled }, children);
}
export default Component14365;
