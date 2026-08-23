import React from 'react';
const LABEL_12066 = 'component_12066';
export function Component12066({ value = 12066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12066, 'data-value': derived.doubled }, children);
}
export default Component12066;
