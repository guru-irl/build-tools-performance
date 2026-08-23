import React from 'react';
const LABEL_40475 = 'component_40475';
export function Component40475({ value = 40475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40475, 'data-value': derived.doubled }, children);
}
export default Component40475;
