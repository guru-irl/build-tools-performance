import React from 'react';
const LABEL_3283 = 'component_3283';
export function Component3283({ value = 3283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3283, 'data-value': derived.doubled }, children);
}
export default Component3283;
