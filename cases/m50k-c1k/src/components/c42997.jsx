import React from 'react';
const LABEL_42997 = 'component_42997';
export function Component42997({ value = 42997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42997, 'data-value': derived.doubled }, children);
}
export default Component42997;
