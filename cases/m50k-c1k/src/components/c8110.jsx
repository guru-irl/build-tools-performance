import React from 'react';
const LABEL_8110 = 'component_8110';
export function Component8110({ value = 8110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8110, 'data-value': derived.doubled }, children);
}
export default Component8110;
