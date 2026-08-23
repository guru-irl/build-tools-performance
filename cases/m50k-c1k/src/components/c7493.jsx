import React from 'react';
const LABEL_7493 = 'component_7493';
export function Component7493({ value = 7493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7493, 'data-value': derived.doubled }, children);
}
export default Component7493;
