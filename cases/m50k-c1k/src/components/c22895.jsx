import React from 'react';
const LABEL_22895 = 'component_22895';
export function Component22895({ value = 22895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22895, 'data-value': derived.doubled }, children);
}
export default Component22895;
