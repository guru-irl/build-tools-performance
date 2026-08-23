import React from 'react';
const LABEL_10450 = 'component_10450';
export function Component10450({ value = 10450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10450, 'data-value': derived.doubled }, children);
}
export default Component10450;
