import React from 'react';
const LABEL_25574 = 'component_25574';
export function Component25574({ value = 25574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25574, 'data-value': derived.doubled }, children);
}
export default Component25574;
