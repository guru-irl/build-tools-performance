import React from 'react';
const LABEL_12639 = 'component_12639';
export function Component12639({ value = 12639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12639, 'data-value': derived.doubled }, children);
}
export default Component12639;
