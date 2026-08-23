import React from 'react';
const LABEL_12140 = 'component_12140';
export function Component12140({ value = 12140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12140, 'data-value': derived.doubled }, children);
}
export default Component12140;
