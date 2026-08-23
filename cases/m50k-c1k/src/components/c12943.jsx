import React from 'react';
const LABEL_12943 = 'component_12943';
export function Component12943({ value = 12943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12943, 'data-value': derived.doubled }, children);
}
export default Component12943;
