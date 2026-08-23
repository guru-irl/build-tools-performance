import React from 'react';
const LABEL_42481 = 'component_42481';
export function Component42481({ value = 42481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42481, 'data-value': derived.doubled }, children);
}
export default Component42481;
