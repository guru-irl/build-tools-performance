import React from 'react';
const LABEL_12325 = 'component_12325';
export function Component12325({ value = 12325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12325, 'data-value': derived.doubled }, children);
}
export default Component12325;
