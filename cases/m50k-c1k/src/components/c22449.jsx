import React from 'react';
const LABEL_22449 = 'component_22449';
export function Component22449({ value = 22449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22449, 'data-value': derived.doubled }, children);
}
export default Component22449;
