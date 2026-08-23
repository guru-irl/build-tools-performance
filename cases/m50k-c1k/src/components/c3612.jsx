import React from 'react';
const LABEL_3612 = 'component_3612';
export function Component3612({ value = 3612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3612, 'data-value': derived.doubled }, children);
}
export default Component3612;
