import React from 'react';
const LABEL_20062 = 'component_20062';
export function Component20062({ value = 20062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20062, 'data-value': derived.doubled }, children);
}
export default Component20062;
