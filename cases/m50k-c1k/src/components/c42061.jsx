import React from 'react';
const LABEL_42061 = 'component_42061';
export function Component42061({ value = 42061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42061, 'data-value': derived.doubled }, children);
}
export default Component42061;
