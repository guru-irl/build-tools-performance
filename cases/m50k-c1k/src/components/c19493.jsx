import React from 'react';
const LABEL_19493 = 'component_19493';
export function Component19493({ value = 19493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19493, 'data-value': derived.doubled }, children);
}
export default Component19493;
