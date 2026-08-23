import React from 'react';
const LABEL_12425 = 'component_12425';
export function Component12425({ value = 12425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12425, 'data-value': derived.doubled }, children);
}
export default Component12425;
