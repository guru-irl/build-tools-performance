import React from 'react';
const LABEL_12290 = 'component_12290';
export function Component12290({ value = 12290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12290, 'data-value': derived.doubled }, children);
}
export default Component12290;
