import React from 'react';
const LABEL_40065 = 'component_40065';
export function Component40065({ value = 40065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40065, 'data-value': derived.doubled }, children);
}
export default Component40065;
