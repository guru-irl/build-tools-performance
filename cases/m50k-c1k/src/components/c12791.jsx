import React from 'react';
const LABEL_12791 = 'component_12791';
export function Component12791({ value = 12791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12791, 'data-value': derived.doubled }, children);
}
export default Component12791;
