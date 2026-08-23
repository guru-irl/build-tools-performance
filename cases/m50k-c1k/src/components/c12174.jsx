import React from 'react';
const LABEL_12174 = 'component_12174';
export function Component12174({ value = 12174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12174, 'data-value': derived.doubled }, children);
}
export default Component12174;
