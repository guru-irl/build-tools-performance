import React from 'react';
const LABEL_42500 = 'component_42500';
export function Component42500({ value = 42500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42500, 'data-value': derived.doubled }, children);
}
export default Component42500;
