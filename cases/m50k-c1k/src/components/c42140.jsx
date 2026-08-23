import React from 'react';
const LABEL_42140 = 'component_42140';
export function Component42140({ value = 42140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42140, 'data-value': derived.doubled }, children);
}
export default Component42140;
