import React from 'react';
const LABEL_28665 = 'component_28665';
export function Component28665({ value = 28665, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28665, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28665, 'data-value': derived.doubled }, children);
}
export default Component28665;
