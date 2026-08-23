import React from 'react';
const LABEL_12612 = 'component_12612';
export function Component12612({ value = 12612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12612, 'data-value': derived.doubled }, children);
}
export default Component12612;
