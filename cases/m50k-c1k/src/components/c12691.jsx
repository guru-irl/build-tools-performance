import React from 'react';
const LABEL_12691 = 'component_12691';
export function Component12691({ value = 12691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12691, 'data-value': derived.doubled }, children);
}
export default Component12691;
