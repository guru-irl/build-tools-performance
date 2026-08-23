import React from 'react';
const LABEL_20938 = 'component_20938';
export function Component20938({ value = 20938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20938, 'data-value': derived.doubled }, children);
}
export default Component20938;
