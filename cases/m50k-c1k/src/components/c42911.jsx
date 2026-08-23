import React from 'react';
const LABEL_42911 = 'component_42911';
export function Component42911({ value = 42911, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42911, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42911, 'data-value': derived.doubled }, children);
}
export default Component42911;
