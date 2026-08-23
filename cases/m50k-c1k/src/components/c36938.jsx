import React from 'react';
const LABEL_36938 = 'component_36938';
export function Component36938({ value = 36938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36938, 'data-value': derived.doubled }, children);
}
export default Component36938;
