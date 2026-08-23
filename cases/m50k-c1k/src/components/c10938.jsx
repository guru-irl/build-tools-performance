import React from 'react';
const LABEL_10938 = 'component_10938';
export function Component10938({ value = 10938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10938, 'data-value': derived.doubled }, children);
}
export default Component10938;
