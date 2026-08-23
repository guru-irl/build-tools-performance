import React from 'react';
const LABEL_12615 = 'component_12615';
export function Component12615({ value = 12615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12615, 'data-value': derived.doubled }, children);
}
export default Component12615;
