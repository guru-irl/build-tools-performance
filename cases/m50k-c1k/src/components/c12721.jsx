import React from 'react';
const LABEL_12721 = 'component_12721';
export function Component12721({ value = 12721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12721, 'data-value': derived.doubled }, children);
}
export default Component12721;
