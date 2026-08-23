import React from 'react';
const LABEL_12649 = 'component_12649';
export function Component12649({ value = 12649, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12649, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12649, 'data-value': derived.doubled }, children);
}
export default Component12649;
