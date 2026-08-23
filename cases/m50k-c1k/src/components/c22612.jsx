import React from 'react';
const LABEL_22612 = 'component_22612';
export function Component22612({ value = 22612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22612, 'data-value': derived.doubled }, children);
}
export default Component22612;
