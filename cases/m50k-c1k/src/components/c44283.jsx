import React from 'react';
const LABEL_44283 = 'component_44283';
export function Component44283({ value = 44283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44283, 'data-value': derived.doubled }, children);
}
export default Component44283;
