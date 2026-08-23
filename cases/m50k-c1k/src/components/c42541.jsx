import React from 'react';
const LABEL_42541 = 'component_42541';
export function Component42541({ value = 42541, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42541, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42541, 'data-value': derived.doubled }, children);
}
export default Component42541;
