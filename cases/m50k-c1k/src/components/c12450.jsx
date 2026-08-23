import React from 'react';
const LABEL_12450 = 'component_12450';
export function Component12450({ value = 12450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12450, 'data-value': derived.doubled }, children);
}
export default Component12450;
