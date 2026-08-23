import React from 'react';
const LABEL_12938 = 'component_12938';
export function Component12938({ value = 12938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12938, 'data-value': derived.doubled }, children);
}
export default Component12938;
