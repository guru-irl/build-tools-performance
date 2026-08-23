import React from 'react';
const LABEL_12735 = 'component_12735';
export function Component12735({ value = 12735, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12735, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12735, 'data-value': derived.doubled }, children);
}
export default Component12735;
