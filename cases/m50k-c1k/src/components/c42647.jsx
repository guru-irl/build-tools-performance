import React from 'react';
const LABEL_42647 = 'component_42647';
export function Component42647({ value = 42647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42647, 'data-value': derived.doubled }, children);
}
export default Component42647;
