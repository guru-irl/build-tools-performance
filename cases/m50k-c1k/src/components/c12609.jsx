import React from 'react';
const LABEL_12609 = 'component_12609';
export function Component12609({ value = 12609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12609, 'data-value': derived.doubled }, children);
}
export default Component12609;
