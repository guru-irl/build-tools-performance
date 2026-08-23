import React from 'react';
const LABEL_12563 = 'component_12563';
export function Component12563({ value = 12563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12563, 'data-value': derived.doubled }, children);
}
export default Component12563;
