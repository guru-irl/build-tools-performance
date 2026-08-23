import React from 'react';
const LABEL_22481 = 'component_22481';
export function Component22481({ value = 22481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22481, 'data-value': derived.doubled }, children);
}
export default Component22481;
