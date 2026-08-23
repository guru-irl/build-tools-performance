import React from 'react';
const LABEL_12994 = 'component_12994';
export function Component12994({ value = 12994, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12994, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12994, 'data-value': derived.doubled }, children);
}
export default Component12994;
