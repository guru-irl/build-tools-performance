import React from 'react';
const LABEL_12783 = 'component_12783';
export function Component12783({ value = 12783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12783, 'data-value': derived.doubled }, children);
}
export default Component12783;
