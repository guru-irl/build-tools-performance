import React from 'react';
const LABEL_12010 = 'component_12010';
export function Component12010({ value = 12010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12010, 'data-value': derived.doubled }, children);
}
export default Component12010;
