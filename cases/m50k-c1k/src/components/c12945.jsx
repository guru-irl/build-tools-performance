import React from 'react';
const LABEL_12945 = 'component_12945';
export function Component12945({ value = 12945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12945, 'data-value': derived.doubled }, children);
}
export default Component12945;
